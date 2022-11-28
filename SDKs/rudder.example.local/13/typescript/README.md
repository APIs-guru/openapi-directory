# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ApiGeneralInformationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiTokens: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.apiInfo.apiGeneralInformations().then((res: ApiGeneralInformationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Info

* `apiGeneralInformations` - List all endoints
* `apiInformations` - Get information about one API endpoint
* `apiSubInformations` - Get information on endpoint in a section

### Compliance

* `getGlobalCompliance` - Global compliance
* `getNodeCompliance` - Compliance details by node
* `getNodesCompliance` - Compliance details for all nodes
* `getRuleCompliance` - Compliance details by rule
* `getRulesCompliance` - Compliance details for all rules

### Directives

* `checkDirective` - Check that update on a directive is valid
* `createDirective` - Create a directive
* `deleteDirective` - Delete a directive
* `directiveDetails` - Get directive details
* `listDirectives` - List all directives
* `updateDirective` - Update a directive details

### Groups

* `createGroupCategory` - Create a group category
* `deleteGroupCategory` - Delete group category
* `getGroupCategoryDetails` - Get group category details
* `getGroupTree` - Get groups tree
* `updateGroupCategory` - Update group category details
* `createGroup` - Create a group
* `deleteGroup` - Delete a group
* `groupDetails` - Get group details
* `listGroups` - List all groups
* `reloadGroup` - Reload a group
* `updateGroup` - Update group details

### Inventories

* `fileWatcherRestart` - Restart inventory watcher
* `fileWatcherStart` - Start inventory watcher
* `fileWatcherStop` - Stop inventory watcher
* `queueInformation` - Get information about inventory processing queue
* `uploadInventory` - Upload an inventory for processing

### Nodes

* `applyNode` - Trigger an agent run
* `applyPolicyAllNodes` - Trigger an agent run on all nodes
* `changePendingNodeStatus` - Update pending Node status
* `deleteNode` - Delete a node
* `getNodesStatus` - Get nodes acceptation status
* `listAcceptedNodes` - List managed nodes
* `listPendingNodes` - List pending nodes
* `nodeDetails` - Get information about a node
* `nodeInheritedProperties` - Get inherited node properties for a node
* `updateNode` - Update node settings and properties

### Parameters

* `createParameter` - Create a new parameter
* `deleteParameter` - Delete a parameter
* `listParameters` - List all global parameters
* `parameterDetails` - Get the value of a parameter
* `updateParameter` - Update a parameter's value

### Rules

* `createRuleCategory` - Create a rule category
* `deleteRuleCategory` - Delete group category
* `getRuleCategoryDetails` - Get rule category details
* `getRuleTree` - Get rules tree
* `updateRuleCategory` - Update rule category details
* `createRule` - Create a rule
* `deleteRule` - Delete a rule
* `listRules` - List all rules
* `ruleDetails` - Get a rule details
* `updateRule` - Update a rule details

### Settings

* `getAllSettings` - List all settings
* `getAllowedNetworks` - Get allowed networks for a policy server
* `getSetting` - Get the value of a setting
* `modifyAllowedNetworks` - Modify allowed networks for a policy server
* `modifySetting` - Set the value of a setting
* `setAllowedNetworks` - Set allowed networks for a policy server

### System

* `createArchive` - Create an archive
* `getHealthcheckResult` - Get healthcheck
* `getStatus` - Get server status
* `getSystemInfo` - Get server information
* `getZipArchive` - Get an archive as a ZIP
* `listArchives` - List archives
* `purgeSoftware` - Trigger batch for cleaning unreferenced software
* `regeneratePolicies` - Trigger a new policy generation
* `reloadAll` - Reload both techniques and dynamic groups
* `reloadGroups` - Reload dynamic groups
* `reloadTechniques` - Reload techniques
* `restoreArchive` - Restore an archive
* `updatePolicies` - Trigger update of policies

### Techniques

* `listTechniqueVersionDirectives` - List all directives based on a version of a technique
* `listTechniques` - List all techniques
* `listTechniquesDirectives` - List all directives based on a technique

### 🧩 Branding

* `getBrandingConf` - Get branding configuration
* `reloadBrandingConf` - Reload branding file
* `updateBRandingConf` - Update web interface customization

### 🧩 CVE

* `checkCve` - Trigger a CVE check
* `getAllCve` - Get all CVE details
* `getCveCheckConfiguration` - Get CVE check config
* `getCveList` - Get a list of CVE details
* `getLastCveCheck` - Get last CVE check result
* `readCvEfromFs` - Update CVE database from file system
* `updateCve` - Update CVE database from remote source
* `updateCveCheckConfiguration` - Update cve check config

### 🧩 Change requests

* `acceptChangeRequest` - Accept a request details
* `changeRequestDetails` - Get a change request details
* `declineChangeRequest` - Decline a request details
* `listChangeRequests` - List all change requests
* `listUsers` - List user
* `removeValidatedUser` - Remove an user from validated user list
* `saveWorkflowUser` - Update validated user list
* `updateChangeRequest` - Update a request details

### 🧩 Create Node

* `createNodes` - Create a new node

### 🧩 Data sources

* `reloadAllDatasourcesAllNodes` - Update properties from data sources
* `reloadAllDatasourcesOneNode` - Update properties for one node from all data sources
* `reloadOneDatasourceAllNodes` - Update properties from data sources
* `reloadOneDatasourceOneNode` - Update properties for one node from a data source
* `createDataSource` - Create a data source
* `deleteDataSource` - Delete a data source
* `getAllDataSources` - List all data sources
* `getDataSource` - Get data source configuration
* `updateDataSource` - Update a data source configuration

### 🧩 Scale out Relay

* `promoteToRelay` - Promote a node to relay

### 🧩 User Management

* `addUser` - Add user
* `deleteUser` - Delete an user
* `getRole` - List all roles
* `getUserInfo` - List all users
* `reloadUserConf` - Reload user
* `updateUser` - Update user's infos

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
