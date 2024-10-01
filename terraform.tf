# Step 1: Provider Configuration
provider "azurerm" {
  features {}
}

# Step 2: Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = "West Europe"
}

# Step 3: Storage Account
resource "azurerm_storage_account" "storage" {
  name                     = "examplestorageacct"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  access_tier              = "Hot"
}