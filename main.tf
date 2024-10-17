terraform {
  backend "remote" {
    organization = "cyberresponse-org"

    workspaces {
      name = "CyberResponse"
    }
  }
}
