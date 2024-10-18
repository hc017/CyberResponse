# backend.tf

terraform {
  backend "azurerm" {
    resource_group_name   = "IRP-backend"
    storage_account_name  = "irp07"  # Must be globally unique
    container_name        = "irpcontainer1"
    key                   = "terraform.tfstate"
  }
}
