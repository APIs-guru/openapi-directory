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
    
req = operations.CreateAccountCredentialRequest(
    security=operations.CreateAccountCredentialSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request=shared.CredentialOptions(
        acl={
            "pariatur": "beatae",
            "iste": "accusamus",
            "a": "odio",
        },
        cidrs="dolores",
        global_=False,
        name="nostrum",
        secret={
            "quia": "culpa",
        },
        type="aws_access_secret",
    ),
)
    
res = s.sdk.create_account_credential(req)

if res.credential is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_account_credential` - Create a new credential
* `create_account_key` - Create a new key
* `create_account_organization` - Create a new organization
* `create_account_user` - Create a new user account
* `create_account_user_invite` - Create a new user account and send an email invite
* `create_scan` - Create a scan task for a given site
* `create_site` - Create a new site
* `delete_account_organization_export_token` - Removes the export token from the specified organization
* `export_assets_csv` - Asset inventory as CSV
* `export_assets_cisco_csv` - Cisco serial number and model name export for Cisco Smart Net Total Care Service.
* `export_assets_json` - Exports the asset inventory
* `export_assets_jsonl` - Asset inventory as JSON line-delimited
* `export_assets_nmap_xml` - Asset inventory as Nmap-style XML
* `export_events_json` - System event log as JSON
* `export_events_jsonl` - System event log as JSON line-delimited
* `export_services_csv` - Service inventory as CSV
* `export_services_json` - Service inventory as JSON
* `export_services_jsonl` - Service inventory as JSON line-delimited
* `export_sites_csv` - Site list as CSV
* `export_sites_json` - Export all sites
* `export_sites_jsonl` - Site list as JSON line-delimited
* `export_wireless_csv` - Wireless inventory as CSV
* `export_wireless_json` - Wireless inventory as JSON
* `export_wireless_jsonl` - Wireless inventory as JSON line-delimited
* `get_account_agents` - Get all agents across all organizations
* `get_account_credential` - Get credential details
* `get_account_credentials` - Get all account credentials
* `get_account_key` - Get key details
* `get_account_keys` - Get all active API keys
* `get_account_license` - Get license details
* `get_account_organization` - Get organization details
* `get_account_organizations` - Get all organization details
* `get_account_sites` - Get all sites details across all organizations
* `get_account_tasks` - Get all task details across all organizations (up to 1000)
* `get_account_user` - Get user details
* `get_account_users` - Get all users
* `get_agent` - Get details for a single agent
* `get_agents` - Get all agents
* `get_asset` - Get asset details
* `get_assets` - Get all assets
* `get_key` - Get API key details
* `get_latest_agent_version` - Returns latest agent version
* `get_latest_platform_version` - Returns latest platform version
* `get_latest_scanner_version` - Returns latest scanner version
* `get_organization` - Get organization details
* `get_service` - Get service details
* `get_services` - Get all services
* `get_site` - Get site details
* `get_sites` - Get all sites
* `get_task` - Get task details
* `get_task_change_report` - Returns a temporary task change report data url
* `get_task_scan_data` - Returns a temporary task scan data url
* `get_tasks` - Get all tasks (last 1000)
* `get_wireless_lan` - Get wireless LAN details
* `get_wireless_la_ns` - Get all wireless LANs
* `hide_task` - Signal that a completed task should be hidden
* `import_scan_data` - Import a scan data file into a site
* `remove_account_credential` - Remove this credential
* `remove_account_key` - Remove this key
* `remove_account_organization` - Remove this organization
* `remove_account_user` - Remove this user
* `remove_agent` - Remove and uninstall an agent
* `remove_asset` - Remove an asset
* `remove_key` - Remove the current API key
* `remove_service` - Remove a service
* `remove_site` - Remove a site and associated assets
* `remove_wireless_lan` - Remove a wireless LAN
* `reset_account_user_lockout` - Resets the user's lockout status
* `reset_account_user_mfa` - Resets the user's MFA tokens
* `reset_account_user_password` - Sends the user a password reset email
* `rotate_account_key` - Rotates the key secret
* `rotate_account_organization_export_token` - Rotates the organization export token and returns the updated organization
* `rotate_key` - Rotate the API key secret and return the updated key
* `snow_export_assets_csv` - Export an asset inventory as CSV for ServiceNow integration
* `snow_export_assets_json` - Exports the asset inventory as JSON
* `snow_export_services_csv` - Export a service inventory as CSV for ServiceNow integration
* `splunk_asset_sync_created_json` - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* `splunk_asset_sync_updated_json` - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
* `stop_task` - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* `update_account_organization` - Update organization details
* `update_account_user` - Update a user's details
* `update_agent_site` - Update the site associated with agent
* `update_asset_comments` - Update asset comments
* `update_asset_tags` - Update asset tags
* `update_organization` - Update organization details
* `update_site` - Update a site definition
* `update_task` - Update task parameters
* `upgrade_agent` - Force an agent to update and restart

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
