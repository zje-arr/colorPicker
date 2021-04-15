terraform {
  required_providers {
    netlify = {
      source  = "royge/netlify"
      version = "0.4.2"
    }

    github = {
      source  = "integrations/github"
      version = "4.5.2"
    }
  }
}

provider "netlify" {
  // export NETLIFY_TOKEN=<netlify_access_token>
}

provider "github" {
  // export GITHUB_TOKEN=<github_access_token>
  owner = var.github_org_name
}

resource "netlify_deploy_key" "key" {}

resource "github_repository_deploy_key" "portal_deploy_key" {
  title      = "Netlify - ${var.github_repo_name}"
  repository = var.github_repo_name
  key        = netlify_deploy_key.key.public_key
  read_only  = false

  depends_on = [
    netlify_deploy_key.key,
  ]
}

resource "github_repository_webhook" "portal_web_hook" {
  repository = github_repository_deploy_key.portal_deploy_key.repository
  events     = var.github_event_triggers

  configuration {
    content_type = "json"
    url          = "https://api.netlify.com/hooks/github"
  }

  depends_on = [
    netlify_site.portal_website
  ]
}

resource "netlify_site" "portal_website" {
  name = var.netlify_website_name

  repo {
    dir           = var.js_framework_build_path
    command       = var.js_framework_build_command
    repo_branch   = var.github_repo_branch
    deploy_key_id = netlify_deploy_key.key.public_key
    provider      = "github"
    repo_path     = "${var.github_org_name}/${github_repository_deploy_key.portal_deploy_key.repository}"
  }

  depends_on = [
    netlify_deploy_key.key
  ]
}

resource "netlify_build_hook" "portal_manual_trigger" {
  site_id = netlify_site.portal_website.id
  branch  = netlify_site.portal_website.repo[0].repo_branch
  title   = "${netlify_site.portal_website.repo[0].repo_branch} Manual Build Trigger"
}
