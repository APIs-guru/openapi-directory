# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateAccountCredentialRequest{
        Security: operations.CreateAccountCredentialSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: shared.CredentialOptions{
            ACL: map[string]interface{}{
                "pariatur": "beatae",
                "iste": "accusamus",
                "a": "odio",
            },
            Cidrs: "dolores",
            Global: false,
            Name: "nostrum",
            Secret: map[string]interface{}{
                "quia": "culpa",
            },
            Type: "aws_access_secret",
        },
    }
    
    res, err := s.Sdk.CreateAccountCredential(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAccountCredential` - Create a new credential
* `CreateAccountKey` - Create a new key
* `CreateAccountOrganization` - Create a new organization
* `CreateAccountUser` - Create a new user account
* `CreateAccountUserInvite` - Create a new user account and send an email invite
* `CreateScan` - Create a scan task for a given site
* `CreateSite` - Create a new site
* `DeleteAccountOrganizationExportToken` - Removes the export token from the specified organization
* `ExportAssetsCsv` - Asset inventory as CSV
* `ExportAssetsCiscoCsv` - Cisco serial number and model name export for Cisco Smart Net Total Care Service.
* `ExportAssetsJSON` - Exports the asset inventory
* `ExportAssetsJsonl` - Asset inventory as JSON line-delimited
* `ExportAssetsNmapXML` - Asset inventory as Nmap-style XML
* `ExportEventsJSON` - System event log as JSON
* `ExportEventsJsonl` - System event log as JSON line-delimited
* `ExportServicesCsv` - Service inventory as CSV
* `ExportServicesJSON` - Service inventory as JSON
* `ExportServicesJsonl` - Service inventory as JSON line-delimited
* `ExportSitesCsv` - Site list as CSV
* `ExportSitesJSON` - Export all sites
* `ExportSitesJsonl` - Site list as JSON line-delimited
* `ExportWirelessCsv` - Wireless inventory as CSV
* `ExportWirelessJSON` - Wireless inventory as JSON
* `ExportWirelessJsonl` - Wireless inventory as JSON line-delimited
* `GetAccountAgents` - Get all agents across all organizations
* `GetAccountCredential` - Get credential details
* `GetAccountCredentials` - Get all account credentials
* `GetAccountKey` - Get key details
* `GetAccountKeys` - Get all active API keys
* `GetAccountLicense` - Get license details
* `GetAccountOrganization` - Get organization details
* `GetAccountOrganizations` - Get all organization details
* `GetAccountSites` - Get all sites details across all organizations
* `GetAccountTasks` - Get all task details across all organizations (up to 1000)
* `GetAccountUser` - Get user details
* `GetAccountUsers` - Get all users
* `GetAgent` - Get details for a single agent
* `GetAgents` - Get all agents
* `GetAsset` - Get asset details
* `GetAssets` - Get all assets
* `GetKey` - Get API key details
* `GetLatestAgentVersion` - Returns latest agent version
* `GetLatestPlatformVersion` - Returns latest platform version
* `GetLatestScannerVersion` - Returns latest scanner version
* `GetOrganization` - Get organization details
* `GetService` - Get service details
* `GetServices` - Get all services
* `GetSite` - Get site details
* `GetSites` - Get all sites
* `GetTask` - Get task details
* `GetTaskChangeReport` - Returns a temporary task change report data url
* `GetTaskScanData` - Returns a temporary task scan data url
* `GetTasks` - Get all tasks (last 1000)
* `GetWirelessLan` - Get wireless LAN details
* `GetWirelessLaNs` - Get all wireless LANs
* `HideTask` - Signal that a completed task should be hidden
* `ImportScanData` - Import a scan data file into a site
* `RemoveAccountCredential` - Remove this credential
* `RemoveAccountKey` - Remove this key
* `RemoveAccountOrganization` - Remove this organization
* `RemoveAccountUser` - Remove this user
* `RemoveAgent` - Remove and uninstall an agent
* `RemoveAsset` - Remove an asset
* `RemoveKey` - Remove the current API key
* `RemoveService` - Remove a service
* `RemoveSite` - Remove a site and associated assets
* `RemoveWirelessLan` - Remove a wireless LAN
* `ResetAccountUserLockout` - Resets the user's lockout status
* `ResetAccountUserMfa` - Resets the user's MFA tokens
* `ResetAccountUserPassword` - Sends the user a password reset email
* `RotateAccountKey` - Rotates the key secret
* `RotateAccountOrganizationExportToken` - Rotates the organization export token and returns the updated organization
* `RotateKey` - Rotate the API key secret and return the updated key
* `SnowExportAssetsCsv` - Export an asset inventory as CSV for ServiceNow integration
* `SnowExportAssetsJSON` - Exports the asset inventory as JSON
* `SnowExportServicesCsv` - Export a service inventory as CSV for ServiceNow integration
* `SplunkAssetSyncCreatedJSON` - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* `SplunkAssetSyncUpdatedJSON` - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
* `StopTask` - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* `UpdateAccountOrganization` - Update organization details
* `UpdateAccountUser` - Update a user's details
* `UpdateAgentSite` - Update the site associated with agent
* `UpdateAssetComments` - Update asset comments
* `UpdateAssetTags` - Update asset tags
* `UpdateOrganization` - Update organization details
* `UpdateSite` - Update a site definition
* `UpdateTask` - Update task parameters
* `UpgradeAgent` - Force an agent to update and restart

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
