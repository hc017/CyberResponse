# backend.tf

terraform {
  backend "azurerm" {
    resource_group_name   = "CyberResponse-backend"
    storage_account_name  = "cyberresponse07"  # Must be globally unique
    container_name        = "irptfcontainer"
    key                   = "terraform.tfstate"
  }
}
