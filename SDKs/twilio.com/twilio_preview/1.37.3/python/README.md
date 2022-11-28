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
    
req = operations.CreateDeployedDevicesCertificateRequest(
    security=operations.CreateDeployedDevicesCertificateSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateDeployedDevicesCertificatePathParams(
        fleet_sid="ea",
    ),
    request=operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest(
        certificate_data="possimus",
        device_sid="aliquid",
        friendly_name="nobis",
    ),
)
    
res = s.sdk.create_deployed_devices_certificate(req)

if res.preview_deployed_devices_fleet_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_deployed_devices_certificate` - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* `create_deployed_devices_deployment` - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* `create_deployed_devices_device` - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* `create_deployed_devices_fleet` - Create a new Fleet for scoping of deployed devices within your account.
* `create_deployed_devices_key` - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* `create_hosted_numbers_authorization_document` - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* `create_hosted_numbers_hosted_number_order` - Host a phone number's capability on Twilio's platform.
* `create_marketplace_installed_add_on` - Install an Add-on for the Account specified.
* `create_sync_document`
* `create_sync_service`
* `create_sync_sync_list`
* `create_sync_sync_list_item`
* `create_sync_sync_map`
* `create_sync_sync_map_item`
* `create_trusted_comms_channel` - Associate a channel to a branded channel
* `create_understand_assistant`
* `create_understand_field`
* `create_understand_field_type`
* `create_understand_field_value`
* `create_understand_model_build`
* `create_understand_query`
* `create_understand_sample`
* `create_understand_task`
* `create_wireless_command`
* `create_wireless_rate_plan`
* `delete_deployed_devices_certificate` - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `delete_deployed_devices_deployment` - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* `delete_deployed_devices_device` - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* `delete_deployed_devices_fleet` - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* `delete_deployed_devices_key` - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* `delete_hosted_numbers_hosted_number_order` - Cancel the HostedNumberOrder (only available when the status is in `received`).
* `delete_marketplace_installed_add_on` - Remove an Add-on installation from your account
* `delete_sync_document`
* `delete_sync_document_permission` - Delete a specific Sync Document Permission.
* `delete_sync_service`
* `delete_sync_sync_list`
* `delete_sync_sync_list_item`
* `delete_sync_sync_list_permission` - Delete a specific Sync List Permission.
* `delete_sync_sync_map`
* `delete_sync_sync_map_item`
* `delete_sync_sync_map_permission` - Delete a specific Sync Map Permission.
* `delete_understand_assistant`
* `delete_understand_field`
* `delete_understand_field_type`
* `delete_understand_field_value`
* `delete_understand_model_build`
* `delete_understand_query`
* `delete_understand_sample`
* `delete_understand_task`
* `delete_wireless_rate_plan`
* `fetch_deployed_devices_certificate` - Fetch information about a specific Certificate credential in the Fleet.
* `fetch_deployed_devices_deployment` - Fetch information about a specific Deployment in the Fleet.
* `fetch_deployed_devices_device` - Fetch information about a specific Device in the Fleet.
* `fetch_deployed_devices_fleet` - Fetch information about a specific Fleet in your account.
* `fetch_deployed_devices_key` - Fetch information about a specific Key credential in the Fleet.
* `fetch_hosted_numbers_authorization_document` - Fetch a specific AuthorizationDocument.
* `fetch_hosted_numbers_hosted_number_order` - Fetch a specific HostedNumberOrder.
* `fetch_marketplace_available_add_on` - Fetch an instance of an Add-on currently available to be installed.
* `fetch_marketplace_available_add_on_extension` - Fetch an instance of an Extension for the Available Add-on.
* `fetch_marketplace_installed_add_on` - Fetch an instance of an Add-on currently installed on this Account.
* `fetch_marketplace_installed_add_on_extension` - Fetch an instance of an Extension for the Installed Add-on.
* `fetch_sync_document`
* `fetch_sync_document_permission` - Fetch a specific Sync Document Permission.
* `fetch_sync_service`
* `fetch_sync_sync_list`
* `fetch_sync_sync_list_item`
* `fetch_sync_sync_list_permission` - Fetch a specific Sync List Permission.
* `fetch_sync_sync_map`
* `fetch_sync_sync_map_item`
* `fetch_sync_sync_map_permission` - Fetch a specific Sync Map Permission.
* `fetch_trusted_comms_branded_channel` - Fetch a specific Branded Channel.
* `fetch_trusted_comms_brands_information` - Retrieve the newest available BrandInformation
* `fetch_trusted_comms_cps` - Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
* `fetch_trusted_comms_current_call` - Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
* `fetch_understand_assistant`
* `fetch_understand_assistant_fallback_actions`
* `fetch_understand_assistant_initiation_actions`
* `fetch_understand_dialogue`
* `fetch_understand_field`
* `fetch_understand_field_type`
* `fetch_understand_field_value`
* `fetch_understand_model_build`
* `fetch_understand_query`
* `fetch_understand_sample`
* `fetch_understand_style_sheet` - Returns Style sheet JSON object for this Assistant
* `fetch_understand_task`
* `fetch_understand_task_actions` - Returns JSON actions for this Task.
* `fetch_understand_task_statistics`
* `fetch_wireless_command`
* `fetch_wireless_rate_plan`
* `fetch_wireless_sim`
* `fetch_wireless_usage`
* `list_deployed_devices_certificate` - Retrieve a list of all Certificate credentials belonging to the Fleet.
* `list_deployed_devices_deployment` - Retrieve a list of all Deployments belonging to the Fleet.
* `list_deployed_devices_device` - Retrieve a list of all Devices belonging to the Fleet.
* `list_deployed_devices_fleet` - Retrieve a list of all Fleets belonging to your account.
* `list_deployed_devices_key` - Retrieve a list of all Keys credentials belonging to the Fleet.
* `list_hosted_numbers_authorization_document` - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* `list_hosted_numbers_dependent_hosted_number_order` - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* `list_hosted_numbers_hosted_number_order` - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* `list_marketplace_available_add_on` - Retrieve a list of Add-ons currently available to be installed.
* `list_marketplace_available_add_on_extension` - Retrieve a list of Extensions for the Available Add-on.
* `list_marketplace_installed_add_on` - Retrieve a list of Add-ons currently installed on this Account.
* `list_marketplace_installed_add_on_extension` - Retrieve a list of Extensions for the Installed Add-on.
* `list_sync_document`
* `list_sync_document_permission` - Retrieve a list of all Permissions applying to a Sync Document.
* `list_sync_service`
* `list_sync_sync_list`
* `list_sync_sync_list_item`
* `list_sync_sync_list_permission` - Retrieve a list of all Permissions applying to a Sync List.
* `list_sync_sync_map`
* `list_sync_sync_map_item`
* `list_sync_sync_map_permission` - Retrieve a list of all Permissions applying to a Sync Map.
* `list_understand_assistant`
* `list_understand_field`
* `list_understand_field_type`
* `list_understand_field_value`
* `list_understand_model_build`
* `list_understand_query`
* `list_understand_sample`
* `list_understand_task`
* `list_wireless_command`
* `list_wireless_rate_plan`
* `list_wireless_sim`
* `update_deployed_devices_certificate` - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* `update_deployed_devices_deployment` - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* `update_deployed_devices_device` - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* `update_deployed_devices_fleet` - Update the friendly name property of a specific Fleet in your account.
* `update_deployed_devices_key` - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* `update_hosted_numbers_authorization_document` - Updates a specific AuthorizationDocument.
* `update_hosted_numbers_hosted_number_order` - Updates a specific HostedNumberOrder.
* `update_marketplace_installed_add_on` - Update an Add-on installation for the Account specified.
* `update_marketplace_installed_add_on_extension` - Update an Extension for an Add-on installation.
* `update_sync_document`
* `update_sync_document_permission` - Update an identity's access to a specific Sync Document.
* `update_sync_service`
* `update_sync_sync_list_item`
* `update_sync_sync_list_permission` - Update an identity's access to a specific Sync List.
* `update_sync_sync_map_item`
* `update_sync_sync_map_permission` - Update an identity's access to a specific Sync Map.
* `update_understand_assistant`
* `update_understand_assistant_fallback_actions`
* `update_understand_assistant_initiation_actions`
* `update_understand_field_type`
* `update_understand_model_build`
* `update_understand_query`
* `update_understand_sample`
* `update_understand_style_sheet` - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* `update_understand_task`
* `update_understand_task_actions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `update_wireless_rate_plan`
* `update_wireless_sim`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
