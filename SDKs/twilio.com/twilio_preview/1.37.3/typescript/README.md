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
import { CreateDeployedDevicesCertificateRequest, CreateDeployedDevicesCertificateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateDeployedDevicesCertificateRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    fleetSid: "ea",
  },
  request: {
    certificateData: "possimus",
    deviceSid: "aliquid",
    friendlyName: "nobis",
  },
};

sdk.sdk.createDeployedDevicesCertificate(req).then((res: CreateDeployedDevicesCertificateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDeployedDevicesCertificate` - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* `createDeployedDevicesDeployment` - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* `createDeployedDevicesDevice` - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* `createDeployedDevicesFleet` - Create a new Fleet for scoping of deployed devices within your account.
* `createDeployedDevicesKey` - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* `createHostedNumbersAuthorizationDocument` - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* `createHostedNumbersHostedNumberOrder` - Host a phone number's capability on Twilio's platform.
* `createMarketplaceInstalledAddOn` - Install an Add-on for the Account specified.
* `createSyncDocument`
* `createSyncService`
* `createSyncSyncList`
* `createSyncSyncListItem`
* `createSyncSyncMap`
* `createSyncSyncMapItem`
* `createTrustedCommsChannel` - Associate a channel to a branded channel
* `createUnderstandAssistant`
* `createUnderstandField`
* `createUnderstandFieldType`
* `createUnderstandFieldValue`
* `createUnderstandModelBuild`
* `createUnderstandQuery`
* `createUnderstandSample`
* `createUnderstandTask`
* `createWirelessCommand`
* `createWirelessRatePlan`
* `deleteDeployedDevicesCertificate` - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `deleteDeployedDevicesDeployment` - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* `deleteDeployedDevicesDevice` - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* `deleteDeployedDevicesFleet` - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* `deleteDeployedDevicesKey` - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `deleteHostedNumbersHostedNumberOrder` - Cancel the HostedNumberOrder (only available when the status is in `received`).
* `deleteMarketplaceInstalledAddOn` - Remove an Add-on installation from your account
* `deleteSyncDocument`
* `deleteSyncDocumentPermission` - Delete a specific Sync Document Permission.
* `deleteSyncService`
* `deleteSyncSyncList`
* `deleteSyncSyncListItem`
* `deleteSyncSyncListPermission` - Delete a specific Sync List Permission.
* `deleteSyncSyncMap`
* `deleteSyncSyncMapItem`
* `deleteSyncSyncMapPermission` - Delete a specific Sync Map Permission.
* `deleteUnderstandAssistant`
* `deleteUnderstandField`
* `deleteUnderstandFieldType`
* `deleteUnderstandFieldValue`
* `deleteUnderstandModelBuild`
* `deleteUnderstandQuery`
* `deleteUnderstandSample`
* `deleteUnderstandTask`
* `deleteWirelessRatePlan`
* `fetchDeployedDevicesCertificate` - Fetch information about a specific Certificate credential in the Fleet.
* `fetchDeployedDevicesDeployment` - Fetch information about a specific Deployment in the Fleet.
* `fetchDeployedDevicesDevice` - Fetch information about a specific Device in the Fleet.
* `fetchDeployedDevicesFleet` - Fetch information about a specific Fleet in your account.
* `fetchDeployedDevicesKey` - Fetch information about a specific Key credential in the Fleet.
* `fetchHostedNumbersAuthorizationDocument` - Fetch a specific AuthorizationDocument.
* `fetchHostedNumbersHostedNumberOrder` - Fetch a specific HostedNumberOrder.
* `fetchMarketplaceAvailableAddOn` - Fetch an instance of an Add-on currently available to be installed.
* `fetchMarketplaceAvailableAddOnExtension` - Fetch an instance of an Extension for the Available Add-on.
* `fetchMarketplaceInstalledAddOn` - Fetch an instance of an Add-on currently installed on this Account.
* `fetchMarketplaceInstalledAddOnExtension` - Fetch an instance of an Extension for the Installed Add-on.
* `fetchSyncDocument`
* `fetchSyncDocumentPermission` - Fetch a specific Sync Document Permission.
* `fetchSyncService`
* `fetchSyncSyncList`
* `fetchSyncSyncListItem`
* `fetchSyncSyncListPermission` - Fetch a specific Sync List Permission.
* `fetchSyncSyncMap`
* `fetchSyncSyncMapItem`
* `fetchSyncSyncMapPermission` - Fetch a specific Sync Map Permission.
* `fetchTrustedCommsBrandedChannel` - Fetch a specific Branded Channel.
* `fetchTrustedCommsBrandsInformation` - Retrieve the newest available BrandInformation
* `fetchTrustedCommsCps` - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
* `fetchTrustedCommsCurrentCall` - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
* `fetchUnderstandAssistant`
* `fetchUnderstandAssistantFallbackActions`
* `fetchUnderstandAssistantInitiationActions`
* `fetchUnderstandDialogue`
* `fetchUnderstandField`
* `fetchUnderstandFieldType`
* `fetchUnderstandFieldValue`
* `fetchUnderstandModelBuild`
* `fetchUnderstandQuery`
* `fetchUnderstandSample`
* `fetchUnderstandStyleSheet` - Returns Style sheet JSON object for this Assistant
* `fetchUnderstandTask`
* `fetchUnderstandTaskActions` - Returns JSON actions for this Task.
* `fetchUnderstandTaskStatistics`
* `fetchWirelessCommand`
* `fetchWirelessRatePlan`
* `fetchWirelessSim`
* `fetchWirelessUsage`
* `listDeployedDevicesCertificate` - Retrieve a list of all Certificate credentials belonging to the Fleet.
* `listDeployedDevicesDeployment` - Retrieve a list of all Deployments belonging to the Fleet.
* `listDeployedDevicesDevice` - Retrieve a list of all Devices belonging to the Fleet.
* `listDeployedDevicesFleet` - Retrieve a list of all Fleets belonging to your account.
* `listDeployedDevicesKey` - Retrieve a list of all Keys credentials belonging to the Fleet.
* `listHostedNumbersAuthorizationDocument` - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* `listHostedNumbersDependentHostedNumberOrder` - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* `listHostedNumbersHostedNumberOrder` - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* `listMarketplaceAvailableAddOn` - Retrieve a list of Add-ons currently available to be installed.
* `listMarketplaceAvailableAddOnExtension` - Retrieve a list of Extensions for the Available Add-on.
* `listMarketplaceInstalledAddOn` - Retrieve a list of Add-ons currently installed on this Account.
* `listMarketplaceInstalledAddOnExtension` - Retrieve a list of Extensions for the Installed Add-on.
* `listSyncDocument`
* `listSyncDocumentPermission` - Retrieve a list of all Permissions applying to a Sync Document.
* `listSyncService`
* `listSyncSyncList`
* `listSyncSyncListItem`
* `listSyncSyncListPermission` - Retrieve a list of all Permissions applying to a Sync List.
* `listSyncSyncMap`
* `listSyncSyncMapItem`
* `listSyncSyncMapPermission` - Retrieve a list of all Permissions applying to a Sync Map.
* `listUnderstandAssistant`
* `listUnderstandField`
* `listUnderstandFieldType`
* `listUnderstandFieldValue`
* `listUnderstandModelBuild`
* `listUnderstandQuery`
* `listUnderstandSample`
* `listUnderstandTask`
* `listWirelessCommand`
* `listWirelessRatePlan`
* `listWirelessSim`
* `updateDeployedDevicesCertificate` - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* `updateDeployedDevicesDeployment` - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* `updateDeployedDevicesDevice` - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* `updateDeployedDevicesFleet` - Update the friendly name property of a specific Fleet in your account.
* `updateDeployedDevicesKey` - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* `updateHostedNumbersAuthorizationDocument` - Updates a specific AuthorizationDocument.
* `updateHostedNumbersHostedNumberOrder` - Updates a specific HostedNumberOrder.
* `updateMarketplaceInstalledAddOn` - Update an Add-on installation for the Account specified.
* `updateMarketplaceInstalledAddOnExtension` - Update an Extension for an Add-on installation.
* `updateSyncDocument`
* `updateSyncDocumentPermission` - Update an identity's access to a specific Sync Document.
* `updateSyncService`
* `updateSyncSyncListItem`
* `updateSyncSyncListPermission` - Update an identity's access to a specific Sync List.
* `updateSyncSyncMapItem`
* `updateSyncSyncMapPermission` - Update an identity's access to a specific Sync Map.
* `updateUnderstandAssistant`
* `updateUnderstandAssistantFallbackActions`
* `updateUnderstandAssistantInitiationActions`
* `updateUnderstandFieldType`
* `updateUnderstandModelBuild`
* `updateUnderstandQuery`
* `updateUnderstandSample`
* `updateUnderstandStyleSheet` - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* `updateUnderstandTask`
* `updateUnderstandTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `updateWirelessRatePlan`
* `updateWirelessSim`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
