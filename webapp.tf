# Create a resource group
resource "azurerm_resource_group" "CyberResponse-rg" {
  name     = var.resource_group_name
  location = var.location
}

# Create app service plan
resource "azurerm_app_service_plan" "service-plan" {
  name                = "irp-service-plan"
  location            = azurerm_resource_group.CyberResponse-rg.location
  resource_group_name = azurerm_resource_group.CyberResponse-rg.name
  kind                = "Linux"
  reserved            = true
  sku {
    tier = "Standard"
    size = "S1"
  }
  tags = {
    environment = "dev"
  }
}

# Create App Service for React app
resource "azurerm_app_service" "app-service" {
  name                = "irp-react-app-service"
  location            = azurerm_resource_group.CyberResponse-rg.location
  resource_group_name = azurerm_resource_group.CyberResponse-rg.name
  app_service_plan_id = azurerm_app_service_plan.service-plan.id

  site_config {
    # This runtime stack is suitable for hosting static files (React build)
    linux_fx_version = "NODE|18-lts"
  }
  tags = {
    environment = "dev"
  }
}
