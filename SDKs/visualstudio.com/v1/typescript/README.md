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
import { DeleteApiV1EnvironmentsEnvironmentIdRequest, DeleteApiV1EnvironmentsEnvironmentIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    bearer: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteApiV1EnvironmentsEnvironmentIdRequest = {
  pathParams: {
    environmentId: "aut",
  },
};

sdk.sdk.deleteApiV1EnvironmentsEnvironmentId(req).then((res: DeleteApiV1EnvironmentsEnvironmentIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteApiV1EnvironmentsEnvironmentId`
* `deleteApiV1EnvironmentsEnvironmentIdPortsPort`
* `deleteApiV1GenevaActionsEnvironmentsEnvironmentId`
* `deleteApiV1SecretsSecretId`
* `deleteApiV1TenantTenantId`
* `deleteApiV1UserSubscriptions`
* `deleteApiV1TenantTenantIdPoolGroupPoolGroupName`
* `deleteApiV1TenantTenantIdPoolPoolName`
* `deleteApiV1TenantTenantIdPoolPoolNameVmVmName`
* `getApiV1AgentsFamily`
* `getApiV1Environments`
* `getApiV1EnvironmentsEnvironmentIdArchive`
* `getApiV1EnvironmentsEnvironmentIdHeartbeattoken`
* `getApiV1EnvironmentsEnvironmentIdLogs`
* `getApiV1EnvironmentsEnvironmentIdState`
* `getApiV1EnvironmentsEnvironmentIdUpdates`
* `getApiV1GenevaActionsBillingEnvironmentId`
* `getApiV1GenevaActionsBillingEnvironmentIdStateChanges`
* `getApiV1GenevaActionsConfigurationTargetKey`
* `getApiV1GenevaActionsEnvironmentsEnvironmentId`
* `getApiV1Locations`
* `getApiV1LocationsLocation`
* `getApiV1Plans`
* `getApiV1PlansSubscriptionIdResourceGroupNameResourceName`
* `getApiV1Sas`
* `getApiV1Secrets`
* `getApiV1TenantTenantId`
* `getApiV1PoolsDefault`
* `getApiV1TenantTenantIdPoolGroupPoolGroupName`
* `getApiV1TenantTenantIdPoolPoolName`
* `getApiV1TenantTenantIdPoolPoolNameVm`
* `getApiV1TenantTenantIdPoolPoolNameVmVmName`
* `getHealth`
* `getWarmup`
* `getEnvironmentRoute`
* `patchApiV1EnvironmentsEnvironmentId`
* `patchApiV1EnvironmentsEnvironmentIdFolder`
* `patchApiV1EnvironmentsEnvironmentIdRestore`
* `patchApiV1TenantTenantIdPoolGroupPoolGroupName`
* `patchApiV1TenantTenantIdPoolPoolName`
* `postApiV1AgentTelemetry`
* `postApiV1Environments`
* `postApiV1EnvironmentsEnvironmentIdArchive`
* `postApiV1EnvironmentsEnvironmentIdExport`
* `postApiV1EnvironmentsEnvironmentIdShutdown`
* `postApiV1EnvironmentsEnvironmentIdStart`
* `postApiV1GenevaActionsBillingEnvironmentIdStateChanges`
* `postApiV1GenevaActionsConfigurationTarget`
* `postApiV1GenevaActionsPrivacyRefreshProfileTelemetryProperties`
* `postApiV1HeartBeat`
* `postApiV1PrebuildsPoolsPoolIdInstances`
* `postApiV1PrebuildsTemplates`
* `postApiV1Secrets`
* `postApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBegin`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespaces`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironments`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegates`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespaces`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironments`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegates`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompleted`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidate`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidate`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompleted`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidate`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBegin`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespaces`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegates`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironments`
* `postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBegin`
* `postApiV1UserSubscriptions`
* `postApiV1TenantTenantIdPoolPoolNameVmVmNameStart`
* `postApiV1TenantTenantIdPoolPoolNameVmVmNameStop`
* `putApiV1EnvironmentsEnvironmentIdPortsPort`
* `putApiV1GenevaActionsEnvironmentsEnvironmentIdArchive`
* `putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdown`
* `putApiV1PrebuildsPoolsPoolIdInstances`
* `putApiV1SecretsSecretId`
* `putApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotification`
* `putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceName`
* `putApiV1TenantTenantId`
* `putApiV1TenantTenantIdPoolGroupPoolGroupName`
* `putApiV1TenantTenantIdPoolPoolName`
* `putApiV1TenantTenantIdPoolPoolNameVmVmName`
* `updateEnvironmentRoute`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
