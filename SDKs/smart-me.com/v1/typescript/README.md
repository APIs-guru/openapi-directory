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
import { AccessTokenPutRequest, AccessTokenPutResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccessTokenPutRequest = {
  request: {
    accessTokenToPut: {
      cardId: 2130978112544675817,
      userId: 5413648224186432040,
    },
    accessTokenToPut1: {
      cardId: 1031776996165443563,
      userId: 5131200068209769688,
    },
    accessTokenToPut2: {
      cardId: 2623587528168044611,
      userId: 3076007419510230686,
    },
    applicationXml: "quas".encode(),
    textXml: "officia".encode(),
  },
};

sdk.sdk.accessTokenPut(req).then((res: AccessTokenPutResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accessTokenPut` - Creates a Access Token to write on a Card (e.g. NFC)
* `accountLogin`
* `actionsGet` - Gets all available Actions of a Device
* `additionalDeviceInformationGet` - Gets the additional information (e.g. Firmware Version) about a device.
* `customDeviceGet` - Gets all Custom Devices
* `deviceBySerialGet` - Gets a Device by it's Serial Number. The Serial is the part before the "-".
* `devicesByEnergyGet` - Gets all Devices for an Energy Type
* `devicesBySubTypeGet` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)
* `devicesGet` - Gets all Devices
* `devicesPost` - Creates or updates a Device or updates it's values.
* `devicesPut` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `fastSendDeviceValuesGet` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.
* `folderAssignPost` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
* `folderMenuGet` - Gets the folder menu items (each item might contain child items)
* `folderSettingsDelete` - Deletes a folder
* `folderSettingsGet` - Gets the settings of a folder or meter
* `folderSettingsPost` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folderGet` - Gets the Values for a folder or a meter
* `getApiCustomDeviceId` - Gets a Custom Device by it's ID
* `getApiDevicesId` - Gets a Device by it's ID
* `getApiVirtualTariffId` - Gets all virtual tariffs of a folder
* `getApiPicoLoadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups
* `healthGet` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.
* `mBusPost` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `meterFolderInformationGet` - Beta: Gets the General Information for a Meter or a Folder
* `meterFolderInformationPost` - Sets the Name of a Meter or a Folder
* `meterValuesGet` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.
* `oAuthAuthorize`
* `postApiAccountLogin`
* `postApiOauthAuthorize`
* `picoChargingHistoryGet` - Gets the last charging history for a pico station
* `picoChargingGet` - Gets the active charging data of a pico station
* `picoLoadmanagementGroupGet` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `picoLoadmanagementSetDynamicCurrentPost` - Sets the dynamic current of a load management group or a single station.
* `picoSettingsGet` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.
* `registerForRealtimeApiDelete` - Deletes a realtime API registration.
* `registerForRealtimeApiGet` - Gets all registrations for the Realtime API.
* `registerForRealtimeApiPost` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `smartMeDeviceConfigurationGet` - Gets the configuration of a smart-me device.
* `subUserDelete` - Delete a subuser
* `subUserGet` - Get a sub user. The user must be assigend to the user that makes this call.
* `subUserPost` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `userToFolderAssignDelete` - Deletes a user to folder assignement
* `userToFolderAssignPost` - Assign a user to a folder
* `userGet` - Gets the informations for the user.
* `valuesInPastMultipleGet` - Gets multiple values of a device. This call needs a smart-me professional licence.
* `valuesInPastGet` - Gets all (last) values of a device
            The first Value found before the given Date is returned.
* `valuesGet` - Gets all (last) values of a device
* `virtualBillingMeterActiveGet` - Beta: Gets all active virtual meters
* `virtualBillingMeterActivePost` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtualBillingMeterDeactivatePost` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtualBillingMetersGet` - Beta: Gets all Meters available to activate as a Virtual Meter.
* `virtualMeterCalculateFormulaGet` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")
* `virtualTariffConsumptionGet` - Gets the consumption of a folder with a virtuall tariffs.
* `virtualTariffGet` - Gets all Virtual Tariffs of a user
* `virtualTariffsForPropertyGet` - Gets all Virtual Tariffs for a property (folder)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
