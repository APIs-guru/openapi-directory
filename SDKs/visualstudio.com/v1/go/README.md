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
                Bearer: shared.SchemeBearer{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteAPIV1EnvironmentsEnvironmentIDRequest{
        PathParams: operations.DeleteAPIV1EnvironmentsEnvironmentIDPathParams{
            EnvironmentID: "aut",
        },
    }
    
    res, err := s.Sdk.DeleteAPIV1EnvironmentsEnvironmentID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteAPIV1EnvironmentsEnvironmentID`
* `DeleteAPIV1EnvironmentsEnvironmentIDPortsPort`
* `DeleteAPIV1GenevaActionsEnvironmentsEnvironmentID`
* `DeleteAPIV1SecretsSecretID`
* `DeleteAPIV1TenantTenantID`
* `DeleteAPIV1UserSubscriptions`
* `DeleteAPIV1TenantTenantIDPoolGroupPoolGroupName`
* `DeleteAPIV1TenantTenantIDPoolPoolName`
* `DeleteAPIV1TenantTenantIDPoolPoolNameVMVMName`
* `GetAPIV1AgentsFamily`
* `GetAPIV1Environments`
* `GetAPIV1EnvironmentsEnvironmentIDArchive`
* `GetAPIV1EnvironmentsEnvironmentIDHeartbeattoken`
* `GetAPIV1EnvironmentsEnvironmentIDLogs`
* `GetAPIV1EnvironmentsEnvironmentIDState`
* `GetAPIV1EnvironmentsEnvironmentIDUpdates`
* `GetAPIV1GenevaActionsBillingEnvironmentID`
* `GetAPIV1GenevaActionsBillingEnvironmentIDStateChanges`
* `GetAPIV1GenevaActionsConfigurationTargetKey`
* `GetAPIV1GenevaActionsEnvironmentsEnvironmentID`
* `GetAPIV1Locations`
* `GetAPIV1LocationsLocation`
* `GetAPIV1Plans`
* `GetAPIV1PlansSubscriptionIDResourceGroupNameResourceName`
* `GetAPIV1Sas`
* `GetAPIV1Secrets`
* `GetAPIV1TenantTenantID`
* `GetAPIV1PoolsDefault`
* `GetAPIV1TenantTenantIDPoolGroupPoolGroupName`
* `GetAPIV1TenantTenantIDPoolPoolName`
* `GetAPIV1TenantTenantIDPoolPoolNameVM`
* `GetAPIV1TenantTenantIDPoolPoolNameVMVMName`
* `GetHealth`
* `GetWarmup`
* `GetEnvironmentRoute`
* `PatchAPIV1EnvironmentsEnvironmentID`
* `PatchAPIV1EnvironmentsEnvironmentIDFolder`
* `PatchAPIV1EnvironmentsEnvironmentIDRestore`
* `PatchAPIV1TenantTenantIDPoolGroupPoolGroupName`
* `PatchAPIV1TenantTenantIDPoolPoolName`
* `PostAPIV1AgentTelemetry`
* `PostAPIV1Environments`
* `PostAPIV1EnvironmentsEnvironmentIDArchive`
* `PostAPIV1EnvironmentsEnvironmentIDExport`
* `PostAPIV1EnvironmentsEnvironmentIDShutdown`
* `PostAPIV1EnvironmentsEnvironmentIDStart`
* `PostAPIV1GenevaActionsBillingEnvironmentIDStateChanges`
* `PostAPIV1GenevaActionsConfigurationTarget`
* `PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryProperties`
* `PostAPIV1HeartBeat`
* `PostAPIV1PrebuildsPoolsPoolIDInstances`
* `PostAPIV1PrebuildsTemplates`
* `PostAPIV1Secrets`
* `PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBegin`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespaces`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironments`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteDelegates`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllCodespaces`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironments`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegates`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompleted`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidate`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceDeletionValidate`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompleted`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidate`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBegin`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespaces`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegates`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteEnvironments`
* `PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBegin`
* `PostAPIV1UserSubscriptions`
* `PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStart`
* `PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStop`
* `PutAPIV1EnvironmentsEnvironmentIDPortsPort`
* `PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchive`
* `PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdown`
* `PutAPIV1PrebuildsPoolsPoolIDInstances`
* `PutAPIV1SecretsSecretID`
* `PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotification`
* `PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceName`
* `PutAPIV1TenantTenantID`
* `PutAPIV1TenantTenantIDPoolGroupPoolGroupName`
* `PutAPIV1TenantTenantIDPoolPoolName`
* `PutAPIV1TenantTenantIDPoolPoolNameVMVMName`
* `UpdateEnvironmentRoute`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
