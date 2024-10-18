# Define variable for the resource group name
variable "resource_group_name" {
  description = "The name of the resource group where resources will be created."
  type        = string
}

# Define variable for the location
variable "location" {
  description = "The region where the resources will be created in Azure."
  type        = string
}
