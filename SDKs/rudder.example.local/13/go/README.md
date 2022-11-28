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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APITokens: shared.SchemeAPITokens{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.APIInfo.APIGeneralInformations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIGeneralInformations200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Info

* `APIGeneralInformations` - List all endoints
* `APIInformations` - Get information about one API endpoint
* `APISubInformations` - Get information on endpoint in a section

### Compliance

* `GetGlobalCompliance` - Global compliance
* `GetNodeCompliance` - Compliance details by node
* `GetNodesCompliance` - Compliance details for all nodes
* `GetRuleCompliance` - Compliance details by rule
* `GetRulesCompliance` - Compliance details for all rules

### Directives

* `CheckDirective` - Check that update on a directive is valid
* `CreateDirective` - Create a directive
* `DeleteDirective` - Delete a directive
* `DirectiveDetails` - Get directive details
* `ListDirectives` - List all directives
* `UpdateDirective` - Update a directive details

### Groups

* `CreateGroupCategory` - Create a group category
* `DeleteGroupCategory` - Delete group category
* `GetGroupCategoryDetails` - Get group category details
* `GetGroupTree` - Get groups tree
* `UpdateGroupCategory` - Update group category details
* `CreateGroup` - Create a group
* `DeleteGroup` - Delete a group
* `GroupDetails` - Get group details
* `ListGroups` - List all groups
* `ReloadGroup` - Reload a group
* `UpdateGroup` - Update group details

### Inventories

* `FileWatcherRestart` - Restart inventory watcher
* `FileWatcherStart` - Start inventory watcher
* `FileWatcherStop` - Stop inventory watcher
* `QueueInformation` - Get information about inventory processing queue
* `UploadInventory` - Upload an inventory for processing

### Nodes

* `ApplyNode` - Trigger an agent run
* `ApplyPolicyAllNodes` - Trigger an agent run on all nodes
* `ChangePendingNodeStatus` - Update pending Node status
* `DeleteNode` - Delete a node
* `GetNodesStatus` - Get nodes acceptation status
* `ListAcceptedNodes` - List managed nodes
* `ListPendingNodes` - List pending nodes
* `NodeDetails` - Get information about a node
* `NodeInheritedProperties` - Get inherited node properties for a node
* `UpdateNode` - Update node settings and properties

### Parameters

* `CreateParameter` - Create a new parameter
* `DeleteParameter` - Delete a parameter
* `ListParameters` - List all global parameters
* `ParameterDetails` - Get the value of a parameter
* `UpdateParameter` - Update a parameter's value

### Rules

* `CreateRuleCategory` - Create a rule category
* `DeleteRuleCategory` - Delete group category
* `GetRuleCategoryDetails` - Get rule category details
* `GetRuleTree` - Get rules tree
* `UpdateRuleCategory` - Update rule category details
* `CreateRule` - Create a rule
* `DeleteRule` - Delete a rule
* `ListRules` - List all rules
* `RuleDetails` - Get a rule details
* `UpdateRule` - Update a rule details

### Settings

* `GetAllSettings` - List all settings
* `GetAllowedNetworks` - Get allowed networks for a policy server
* `GetSetting` - Get the value of a setting
* `ModifyAllowedNetworks` - Modify allowed networks for a policy server
* `ModifySetting` - Set the value of a setting
* `SetAllowedNetworks` - Set allowed networks for a policy server

### System

* `CreateArchive` - Create an archive
* `GetHealthcheckResult` - Get healthcheck
* `GetStatus` - Get server status
* `GetSystemInfo` - Get server information
* `GetZipArchive` - Get an archive as a ZIP
* `ListArchives` - List archives
* `PurgeSoftware` - Trigger batch for cleaning unreferenced software
* `RegeneratePolicies` - Trigger a new policy generation
* `ReloadAll` - Reload both techniques and dynamic groups
* `ReloadGroups` - Reload dynamic groups
* `ReloadTechniques` - Reload techniques
* `RestoreArchive` - Restore an archive
* `UpdatePolicies` - Trigger update of policies

### Techniques

* `ListTechniqueVersionDirectives` - List all directives based on a version of a technique
* `ListTechniques` - List all techniques
* `ListTechniquesDirectives` - List all directives based on a technique

### 🧩 Branding

* `GetBrandingConf` - Get branding configuration
* `ReloadBrandingConf` - Reload branding file
* `UpdateBRandingConf` - Update web interface customization

### 🧩 CVE

* `CheckCve` - Trigger a CVE check
* `GetAllCve` - Get all CVE details
* `GetCveCheckConfiguration` - Get CVE check config
* `GetCveList` - Get a list of CVE details
* `GetLastCveCheck` - Get last CVE check result
* `ReadCvEfromFs` - Update CVE database from file system
* `UpdateCve` - Update CVE database from remote source
* `UpdateCveCheckConfiguration` - Update cve check config

### 🧩 Change requests

* `AcceptChangeRequest` - Accept a request details
* `ChangeRequestDetails` - Get a change request details
* `DeclineChangeRequest` - Decline a request details
* `ListChangeRequests` - List all change requests
* `ListUsers` - List user
* `RemoveValidatedUser` - Remove an user from validated user list
* `SaveWorkflowUser` - Update validated user list
* `UpdateChangeRequest` - Update a request details

### 🧩 Create Node

* `CreateNodes` - Create a new node

### 🧩 Data sources

* `ReloadAllDatasourcesAllNodes` - Update properties from data sources
* `ReloadAllDatasourcesOneNode` - Update properties for one node from all data sources
* `ReloadOneDatasourceAllNodes` - Update properties from data sources
* `ReloadOneDatasourceOneNode` - Update properties for one node from a data source
* `CreateDataSource` - Create a data source
* `DeleteDataSource` - Delete a data source
* `GetAllDataSources` - List all data sources
* `GetDataSource` - Get data source configuration
* `UpdateDataSource` - Update a data source configuration

### 🧩 Scale out Relay

* `PromoteToRelay` - Promote a node to relay

### 🧩 User Management

* `AddUser` - Add user
* `DeleteUser` - Delete an user
* `GetRole` - List all roles
* `GetUserInfo` - List all users
* `ReloadUserConf` - Reload user
* `UpdateUser` - Update user's infos

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
