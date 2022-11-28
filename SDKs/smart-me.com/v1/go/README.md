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
    
    req := operations.AccessTokenPutRequest{
        Request: operations.AccessTokenPutRequests{
            AccessTokenToPut: &shared.AccessTokenToPut{
                CardID: 2130978112544675817,
                UserID: 5413648224186432040,
            },
            AccessTokenToPut1: &shared.AccessTokenToPut{
                CardID: 1031776996165443563,
                UserID: 5131200068209769688,
            },
            AccessTokenToPut2: &shared.AccessTokenToPut{
                CardID: 2623587528168044611,
                UserID: 3076007419510230686,
            },
            ApplicationXML: []byte("quas"),
            TextXML: []byte("officia"),
        },
    }
    
    res, err := s.Sdk.AccessTokenPut(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPut200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AccessTokenPut` - Creates a Access Token to write on a Card (e.g. NFC)
* `AccountLogin`
* `ActionsGet` - Gets all available Actions of a Device
* `AdditionalDeviceInformationGet` - Gets the additional information (e.g. Firmware Version) about a device.
* `CustomDeviceGet` - Gets all Custom Devices
* `DeviceBySerialGet` - Gets a Device by it's Serial Number. The Serial is the part before the "-".
* `DevicesByEnergyGet` - Gets all Devices for an Energy Type
* `DevicesBySubTypeGet` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)
* `DevicesGet` - Gets all Devices
* `DevicesPost` - Creates or updates a Device or updates it's values.
* `DevicesPut` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `FastSendDeviceValuesGet` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.
* `FolderAssignPost` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
* `FolderMenuGet` - Gets the folder menu items (each item might contain child items)
* `FolderSettingsDelete` - Deletes a folder
* `FolderSettingsGet` - Gets the settings of a folder or meter
* `FolderSettingsPost` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `FolderGet` - Gets the Values for a folder or a meter
* `GetAPICustomDeviceID` - Gets a Custom Device by it's ID
* `GetAPIDevicesID` - Gets a Device by it's ID
* `GetAPIVirtualTariffID` - Gets all virtual tariffs of a folder
* `GetAPIPicoLoadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups
* `HealthGet` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.
* `MBusPost` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `MeterFolderInformationGet` - Beta: Gets the General Information for a Meter or a Folder
* `MeterFolderInformationPost` - Sets the Name of a Meter or a Folder
* `MeterValuesGet` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.
* `OAuthAuthorize`
* `PostAPIAccountLogin`
* `PostAPIOauthAuthorize`
* `PicoChargingHistoryGet` - Gets the last charging history for a pico station
* `PicoChargingGet` - Gets the active charging data of a pico station
* `PicoLoadmanagementGroupGet` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `PicoLoadmanagementSetDynamicCurrentPost` - Sets the dynamic current of a load management group or a single station.
* `PicoSettingsGet` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.
* `RegisterForRealtimeAPIDelete` - Deletes a realtime API registration.
* `RegisterForRealtimeAPIGet` - Gets all registrations for the Realtime API.
* `RegisterForRealtimeAPIPost` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `SmartMeDeviceConfigurationGet` - Gets the configuration of a smart-me device.
* `SubUserDelete` - Delete a subuser
* `SubUserGet` - Get a sub user. The user must be assigend to the user that makes this call.
* `SubUserPost` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `UserToFolderAssignDelete` - Deletes a user to folder assignement
* `UserToFolderAssignPost` - Assign a user to a folder
* `UserGet` - Gets the informations for the user.
* `ValuesInPastMultipleGet` - Gets multiple values of a device. This call needs a smart-me professional licence.
* `ValuesInPastGet` - Gets all (last) values of a device
            The first Value found before the given Date is returned.
* `ValuesGet` - Gets all (last) values of a device
* `VirtualBillingMeterActiveGet` - Beta: Gets all active virtual meters
* `VirtualBillingMeterActivePost` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `VirtualBillingMeterDeactivatePost` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `VirtualBillingMetersGet` - Beta: Gets all Meters available to activate as a Virtual Meter.
* `VirtualMeterCalculateFormulaGet` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")
* `VirtualTariffConsumptionGet` - Gets the consumption of a folder with a virtuall tariffs.
* `VirtualTariffGet` - Gets all Virtual Tariffs of a user
* `VirtualTariffsForPropertyGet` - Gets all Virtual Tariffs for a property (folder)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
