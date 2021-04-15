variable "github_repo_name" {
  type        = string
  description = "Github repository name"
  default     = "colorPicker"
}

variable "github_repo_branch" {
  type        = string
  description = "Github repository branch name"
  default     = "testGcp"
}

variable "github_org_name" {
  type        = string
  description = "Github Organization or Username if not in the Organization"
  default     = "jarylolz12"
}

variable "github_event_triggers" {
  type        = list(string)
  description = "List/Array of events to trigger the Integration ex. push, all branches(*))"
  default     = ["*"]
}

variable "netlify_website_name" {
  type        = string
  description = "custom name for netlify website"
  default     = ""
}

variable "js_framework_build_command" {
  type        = string
  description = "npm/yarn command to start the framework build"
  default     = "npm start"
}

variable "js_framework_build_path" {
  type        = string
  description = "path to 'dist' or equivalent folder generated from framework build command"
  default     = "/" # "./dist"
}
