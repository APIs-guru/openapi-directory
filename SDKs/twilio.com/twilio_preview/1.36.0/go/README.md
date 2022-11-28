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
    
    req := operations.CreateDeployedDevicesCertificateRequest{
        Security: operations.CreateDeployedDevicesCertificateSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateDeployedDevicesCertificatePathParams{
            FleetSid: "in",
        },
        Request: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "et",
            DeviceSid: "sint",
            FriendlyName: "minus",
        },
    }
    
    res, err := s.CreateDeployedDevicesCertificate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateDeployedDevicesCertificate` - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* `CreateDeployedDevicesDeployment` - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* `CreateDeployedDevicesDevice` - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* `CreateDeployedDevicesFleet` - Create a new Fleet for scoping of deployed devices within your account.
* `CreateDeployedDevicesKey` - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* `CreateHostedNumbersAuthorizationDocument` - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* `CreateHostedNumbersHostedNumberOrder` - Host a phone number's capability on Twilio's platform.
* `CreateMarketplaceInstalledAddOn` - Install an Add-on for the Account specified.
* `CreateSyncDocument`
* `CreateSyncService`
* `CreateSyncSyncList`
* `CreateSyncSyncListItem`
* `CreateSyncSyncMap`
* `CreateSyncSyncMapItem`
* `CreateTrustedCommsChannel` - Associate a channel to a branded channel
* `CreateUnderstandAssistant`
* `CreateUnderstandField`
* `CreateUnderstandFieldType`
* `CreateUnderstandFieldValue`
* `CreateUnderstandModelBuild`
* `CreateUnderstandQuery`
* `CreateUnderstandSample`
* `CreateUnderstandTask`
* `CreateWirelessCommand`
* `CreateWirelessRatePlan`
* `DeleteDeployedDevicesCertificate` - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `DeleteDeployedDevicesDeployment` - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* `DeleteDeployedDevicesDevice` - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* `DeleteDeployedDevicesFleet` - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* `DeleteDeployedDevicesKey` - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `DeleteHostedNumbersHostedNumberOrder` - Cancel the HostedNumberOrder (only available when the status is in `received`).
* `DeleteMarketplaceInstalledAddOn` - Remove an Add-on installation from your account
* `DeleteSyncDocument`
* `DeleteSyncDocumentPermission` - Delete a specific Sync Document Permission.
* `DeleteSyncService`
* `DeleteSyncSyncList`
* `DeleteSyncSyncListItem`
* `DeleteSyncSyncListPermission` - Delete a specific Sync List Permission.
* `DeleteSyncSyncMap`
* `DeleteSyncSyncMapItem`
* `DeleteSyncSyncMapPermission` - Delete a specific Sync Map Permission.
* `DeleteUnderstandAssistant`
* `DeleteUnderstandField`
* `DeleteUnderstandFieldType`
* `DeleteUnderstandFieldValue`
* `DeleteUnderstandModelBuild`
* `DeleteUnderstandQuery`
* `DeleteUnderstandSample`
* `DeleteUnderstandTask`
* `DeleteWirelessRatePlan`
* `FetchDeployedDevicesCertificate` - Fetch information about a specific Certificate credential in the Fleet.
* `FetchDeployedDevicesDeployment` - Fetch information about a specific Deployment in the Fleet.
* `FetchDeployedDevicesDevice` - Fetch information about a specific Device in the Fleet.
* `FetchDeployedDevicesFleet` - Fetch information about a specific Fleet in your account.
* `FetchDeployedDevicesKey` - Fetch information about a specific Key credential in the Fleet.
* `FetchHostedNumbersAuthorizationDocument` - Fetch a specific AuthorizationDocument.
* `FetchHostedNumbersHostedNumberOrder` - Fetch a specific HostedNumberOrder.
* `FetchMarketplaceAvailableAddOn` - Fetch an instance of an Add-on currently available to be installed.
* `FetchMarketplaceAvailableAddOnExtension` - Fetch an instance of an Extension for the Available Add-on.
* `FetchMarketplaceInstalledAddOn` - Fetch an instance of an Add-on currently installed on this Account.
* `FetchMarketplaceInstalledAddOnExtension` - Fetch an instance of an Extension for the Installed Add-on.
* `FetchSyncDocument`
* `FetchSyncDocumentPermission` - Fetch a specific Sync Document Permission.
* `FetchSyncService`
* `FetchSyncSyncList`
* `FetchSyncSyncListItem`
* `FetchSyncSyncListPermission` - Fetch a specific Sync List Permission.
* `FetchSyncSyncMap`
* `FetchSyncSyncMapItem`
* `FetchSyncSyncMapPermission` - Fetch a specific Sync Map Permission.
* `FetchTrustedCommsBrandedChannel` - Fetch a specific Branded Channel.
* `FetchTrustedCommsBrandsInformation` - Retrieve the newest available BrandInformation
* `FetchTrustedCommsCps` - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
* `FetchTrustedCommsCurrentCall` - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
* `FetchUnderstandAssistant`
* `FetchUnderstandAssistantFallbackActions`
* `FetchUnderstandAssistantInitiationActions`
* `FetchUnderstandDialogue`
* `FetchUnderstandField`
* `FetchUnderstandFieldType`
* `FetchUnderstandFieldValue`
* `FetchUnderstandModelBuild`
* `FetchUnderstandQuery`
* `FetchUnderstandSample`
* `FetchUnderstandStyleSheet` - Returns Style sheet JSON object for this Assistant
* `FetchUnderstandTask`
* `FetchUnderstandTaskActions` - Returns JSON actions for this Task.
* `FetchUnderstandTaskStatistics`
* `FetchWirelessCommand`
* `FetchWirelessRatePlan`
* `FetchWirelessSim`
* `FetchWirelessUsage`
* `ListDeployedDevicesCertificate` - Retrieve a list of all Certificate credentials belonging to the Fleet.
* `ListDeployedDevicesDeployment` - Retrieve a list of all Deployments belonging to the Fleet.
* `ListDeployedDevicesDevice` - Retrieve a list of all Devices belonging to the Fleet.
* `ListDeployedDevicesFleet` - Retrieve a list of all Fleets belonging to your account.
* `ListDeployedDevicesKey` - Retrieve a list of all Keys credentials belonging to the Fleet.
* `ListHostedNumbersAuthorizationDocument` - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* `ListHostedNumbersDependentHostedNumberOrder` - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* `ListHostedNumbersHostedNumberOrder` - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* `ListMarketplaceAvailableAddOn` - Retrieve a list of Add-ons currently available to be installed.
* `ListMarketplaceAvailableAddOnExtension` - Retrieve a list of Extensions for the Available Add-on.
* `ListMarketplaceInstalledAddOn` - Retrieve a list of Add-ons currently installed on this Account.
* `ListMarketplaceInstalledAddOnExtension` - Retrieve a list of Extensions for the Installed Add-on.
* `ListSyncDocument`
* `ListSyncDocumentPermission` - Retrieve a list of all Permissions applying to a Sync Document.
* `ListSyncService`
* `ListSyncSyncList`
* `ListSyncSyncListItem`
* `ListSyncSyncListPermission` - Retrieve a list of all Permissions applying to a Sync List.
* `ListSyncSyncMap`
* `ListSyncSyncMapItem`
* `ListSyncSyncMapPermission` - Retrieve a list of all Permissions applying to a Sync Map.
* `ListUnderstandAssistant`
* `ListUnderstandField`
* `ListUnderstandFieldType`
* `ListUnderstandFieldValue`
* `ListUnderstandModelBuild`
* `ListUnderstandQuery`
* `ListUnderstandSample`
* `ListUnderstandTask`
* `ListWirelessCommand`
* `ListWirelessRatePlan`
* `ListWirelessSim`
* `UpdateDeployedDevicesCertificate` - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* `UpdateDeployedDevicesDeployment` - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* `UpdateDeployedDevicesDevice` - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* `UpdateDeployedDevicesFleet` - Update the friendly name property of a specific Fleet in your account.
* `UpdateDeployedDevicesKey` - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* `UpdateHostedNumbersAuthorizationDocument` - Updates a specific AuthorizationDocument.
* `UpdateHostedNumbersHostedNumberOrder` - Updates a specific HostedNumberOrder.
* `UpdateMarketplaceInstalledAddOn` - Update an Add-on installation for the Account specified.
* `UpdateMarketplaceInstalledAddOnExtension` - Update an Extension for an Add-on installation.
* `UpdateSyncDocument`
* `UpdateSyncDocumentPermission` - Update an identity's access to a specific Sync Document.
* `UpdateSyncService`
* `UpdateSyncSyncListItem`
* `UpdateSyncSyncListPermission` - Update an identity's access to a specific Sync List.
* `UpdateSyncSyncMapItem`
* `UpdateSyncSyncMapPermission` - Update an identity's access to a specific Sync Map.
* `UpdateUnderstandAssistant`
* `UpdateUnderstandAssistantFallbackActions`
* `UpdateUnderstandAssistantInitiationActions`
* `UpdateUnderstandFieldType`
* `UpdateUnderstandModelBuild`
* `UpdateUnderstandQuery`
* `UpdateUnderstandSample`
* `UpdateUnderstandStyleSheet` - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* `UpdateUnderstandTask`
* `UpdateUnderstandTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `UpdateWirelessRatePlan`
* `UpdateWirelessSim`

<!-- End SDK Available Operations -->