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
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteAPIV1EnvironmentsEnvironmentIDRequest(
    path_params=operations.DeleteAPIV1EnvironmentsEnvironmentIDPathParams(
        environment_id="aut",
    ),
)
    
res = s.sdk.delete_api_v1_environments_environment_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_api_v1_environments_environment_id_`
* `delete_api_v1_environments_environment_id_ports_port_`
* `delete_api_v1_geneva_actions_environments_environment_id_`
* `delete_api_v1_secrets_secret_id_`
* `delete_api_v1_tenant_tenant_id_`
* `delete_api_v1_user_subscriptions`
* `delete_api_v1_tenant_tenant_id_pool_group_pool_group_name_`
* `delete_api_v1_tenant_tenant_id_pool_pool_name_`
* `delete_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_`
* `get_api_v1_agents_family_`
* `get_api_v1_environments`
* `get_api_v1_environments_environment_id_archive`
* `get_api_v1_environments_environment_id_heartbeattoken`
* `get_api_v1_environments_environment_id_logs`
* `get_api_v1_environments_environment_id_state`
* `get_api_v1_environments_environment_id_updates`
* `get_api_v1_geneva_actions_billing_environment_id_`
* `get_api_v1_geneva_actions_billing_environment_id_state_changes`
* `get_api_v1_geneva_actions_configuration_target_key_`
* `get_api_v1_geneva_actions_environments_environment_id_`
* `get_api_v1_locations`
* `get_api_v1_locations_location_`
* `get_api_v1_plans`
* `get_api_v1_plans_subscription_id_resource_group_name_resource_name_`
* `get_api_v1_sas`
* `get_api_v1_secrets`
* `get_api_v1_tenant_tenant_id_`
* `get_api_v1_pools_default`
* `get_api_v1_tenant_tenant_id_pool_group_pool_group_name_`
* `get_api_v1_tenant_tenant_id_pool_pool_name_`
* `get_api_v1_tenant_tenant_id_pool_pool_name_vm`
* `get_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_`
* `get_health`
* `get_warmup`
* `get_environment_route`
* `patch_api_v1_environments_environment_id_`
* `patch_api_v1_environments_environment_id_folder`
* `patch_api_v1_environments_environment_id_restore`
* `patch_api_v1_tenant_tenant_id_pool_group_pool_group_name_`
* `patch_api_v1_tenant_tenant_id_pool_pool_name_`
* `post_api_v1_agent_telemetry`
* `post_api_v1_environments`
* `post_api_v1_environments_environment_id_archive`
* `post_api_v1_environments_environment_id_export`
* `post_api_v1_environments_environment_id_shutdown`
* `post_api_v1_environments_environment_id_start`
* `post_api_v1_geneva_actions_billing_environment_id_state_changes`
* `post_api_v1_geneva_actions_configuration_target_`
* `post_api_v1_geneva_actions_privacy_refresh_profile_telemetry_properties`
* `post_api_v1_heart_beat`
* `post_api_v1_prebuilds_pools_pool_id_instances`
* `post_api_v1_prebuilds_templates`
* `post_api_v1_secrets`
* `post_api_v1_subscriptions_subscription_id_providers_provider_namespace_resource_type_resource_read_begin`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_all_codespaces`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_all_environments`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_delete_delegates`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_all_codespaces`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_all_environments`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_read_delegates`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_creation_completed`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_creation_validate`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_deletion_validate`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_patch_completed`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_patch_validate`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_resource_read_begin`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_codespaces`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_delegates`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_write_environments`
* `post_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_read_begin`
* `post_api_v1_user_subscriptions`
* `post_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_start`
* `post_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_stop`
* `put_api_v1_environments_environment_id_ports_port_`
* `put_api_v1_geneva_actions_environments_environment_id_archive`
* `put_api_v1_geneva_actions_environments_environment_id_shutdown`
* `put_api_v1_prebuilds_pools_pool_id_instances`
* `put_api_v1_secrets_secret_id_`
* `put_api_v1_subscriptions_subscription_id_providers_provider_namespace_resource_type_subscription_life_cycle_notification`
* `put_api_v1_subscriptions_subscription_id_resource_groups_resource_group_providers_provider_namespace_resource_type_resource_name_`
* `put_api_v1_tenant_tenant_id_`
* `put_api_v1_tenant_tenant_id_pool_group_pool_group_name_`
* `put_api_v1_tenant_tenant_id_pool_pool_name_`
* `put_api_v1_tenant_tenant_id_pool_pool_name_vm_vm_name_`
* `update_environment_route`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
