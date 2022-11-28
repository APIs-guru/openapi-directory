# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccessTokenPutRequest(
    request=operations.AccessTokenPutRequests(
        access_token_to_put=shared.AccessTokenToPut(
            card_id=2130978112544675817,
            user_id=5413648224186432040,
        ),
        access_token_to_put1=shared.AccessTokenToPut(
            card_id=1031776996165443563,
            user_id=5131200068209769688,
        ),
        access_token_to_put2=shared.AccessTokenToPut(
            card_id=2623587528168044611,
            user_id=3076007419510230686,
        ),
        application_xml="quas".encode(),
        text_xml="officia".encode(),
    ),
)
    
res = s.sdk.access_token_put(req)

if res.access_token_put_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `access_token_put` - Creates a Access Token to write on a Card (e.g. NFC)
* `account_login`
* `actions_get` - Gets all available Actions of a Device
* `additional_device_information_get` - Gets the additional information (e.g. Firmware Version) about a device.
* `custom_device_get` - Gets all Custom Devices
* `device_by_serial_get` - Gets a Device by it's Serial Number. The Serial is the part before the "-".
* `devices_by_energy_get` - Gets all Devices for an Energy Type
* `devices_by_sub_type_get` - Gets all Devices by it's Sub Type (e.g. E-Charging Station)
* `devices_get` - Gets all Devices
* `devices_post` - Creates or updates a Device or updates it's values.
* `devices_put` - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* `fast_send_device_values_get` - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.
* `folder_assign_post` - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
* `folder_menu_get` - Gets the folder menu items (each item might contain child items)
* `folder_settings_delete` - Deletes a folder
* `folder_settings_get` - Gets the settings of a folder or meter
* `folder_settings_post` - Add or edit a folder or a meter. To add a new folder use and empty ID
* `folder_get` - Gets the Values for a folder or a meter
* `get_api_custom_device_id_` - Gets a Custom Device by it's ID
* `get_api_devices_id_` - Gets a Device by it's ID
* `get_api_virtual_tariff_id_` - Gets all virtual tariffs of a folder
* `get_api_pico_loadmanagementgroup` - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups
* `health_get` - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.
* `m_bus_post` - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* `meter_folder_information_get` - Beta: Gets the General Information for a Meter or a Folder
* `meter_folder_information_post` - Sets the Name of a Meter or a Folder
* `meter_values_get` - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.
* `o_auth_authorize`
* `post_api_account_login`
* `post_api_oauth_authorize`
* `pico_charging_history_get` - Gets the last charging history for a pico station
* `pico_charging_get` - Gets the active charging data of a pico station
* `pico_loadmanagement_group_get` - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* `pico_loadmanagement_set_dynamic_current_post` - Sets the dynamic current of a load management group or a single station.
* `pico_settings_get` - GET: api/pico/settings
            
            Returns the settings of a pico charging station.
* `register_for_realtime_api_delete` - Deletes a realtime API registration.
* `register_for_realtime_api_get` - Gets all registrations for the Realtime API.
* `register_for_realtime_api_post` - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* `smart_me_device_configuration_get` - Gets the configuration of a smart-me device.
* `sub_user_delete` - Delete a subuser
* `sub_user_get` - Get a sub user. The user must be assigend to the user that makes this call.
* `sub_user_post` - Creates or updates a subuser.
            To create a new user set no ID (empty)
* `user_to_folder_assign_delete` - Deletes a user to folder assignement
* `user_to_folder_assign_post` - Assign a user to a folder
* `user_get` - Gets the informations for the user.
* `values_in_past_multiple_get` - Gets multiple values of a device. This call needs a smart-me professional licence.
* `values_in_past_get` - Gets all (last) values of a device
            The first Value found before the given Date is returned.
* `values_get` - Gets all (last) values of a device
* `virtual_billing_meter_active_get` - Beta: Gets all active virtual meters
* `virtual_billing_meter_active_post` - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* `virtual_billing_meter_deactivate_post` - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* `virtual_billing_meters_get` - Beta: Gets all Meters available to activate as a Virtual Meter.
* `virtual_meter_calculate_formula_get` - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")
* `virtual_tariff_consumption_get` - Gets the consumption of a folder with a virtuall tariffs.
* `virtual_tariff_get` - Gets all Virtual Tariffs of a user
* `virtual_tariffs_for_property_get` - Gets all Virtual Tariffs for a property (folder)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
