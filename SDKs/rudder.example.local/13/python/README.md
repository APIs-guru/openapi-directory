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
        api_tokens=shared.SchemeAPITokens(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
res = s.api_info.api_general_informations()

if res.api_general_informations_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Info

* `api_general_informations` - List all endoints
* `api_informations` - Get information about one API endpoint
* `api_sub_informations` - Get information on endpoint in a section

### Compliance

* `get_global_compliance` - Global compliance
* `get_node_compliance` - Compliance details by node
* `get_nodes_compliance` - Compliance details for all nodes
* `get_rule_compliance` - Compliance details by rule
* `get_rules_compliance` - Compliance details for all rules

### Directives

* `check_directive` - Check that update on a directive is valid
* `create_directive` - Create a directive
* `delete_directive` - Delete a directive
* `directive_details` - Get directive details
* `list_directives` - List all directives
* `update_directive` - Update a directive details

### Groups

* `create_group_category` - Create a group category
* `delete_group_category` - Delete group category
* `get_group_category_details` - Get group category details
* `get_group_tree` - Get groups tree
* `update_group_category` - Update group category details
* `create_group` - Create a group
* `delete_group` - Delete a group
* `group_details` - Get group details
* `list_groups` - List all groups
* `reload_group` - Reload a group
* `update_group` - Update group details

### Inventories

* `file_watcher_restart` - Restart inventory watcher
* `file_watcher_start` - Start inventory watcher
* `file_watcher_stop` - Stop inventory watcher
* `queue_information` - Get information about inventory processing queue
* `upload_inventory` - Upload an inventory for processing

### Nodes

* `apply_node` - Trigger an agent run
* `apply_policy_all_nodes` - Trigger an agent run on all nodes
* `change_pending_node_status` - Update pending Node status
* `delete_node` - Delete a node
* `get_nodes_status` - Get nodes acceptation status
* `list_accepted_nodes` - List managed nodes
* `list_pending_nodes` - List pending nodes
* `node_details` - Get information about a node
* `node_inherited_properties` - Get inherited node properties for a node
* `update_node` - Update node settings and properties

### Parameters

* `create_parameter` - Create a new parameter
* `delete_parameter` - Delete a parameter
* `list_parameters` - List all global parameters
* `parameter_details` - Get the value of a parameter
* `update_parameter` - Update a parameter's value

### Rules

* `create_rule_category` - Create a rule category
* `delete_rule_category` - Delete group category
* `get_rule_category_details` - Get rule category details
* `get_rule_tree` - Get rules tree
* `update_rule_category` - Update rule category details
* `create_rule` - Create a rule
* `delete_rule` - Delete a rule
* `list_rules` - List all rules
* `rule_details` - Get a rule details
* `update_rule` - Update a rule details

### Settings

* `get_all_settings` - List all settings
* `get_allowed_networks` - Get allowed networks for a policy server
* `get_setting` - Get the value of a setting
* `modify_allowed_networks` - Modify allowed networks for a policy server
* `modify_setting` - Set the value of a setting
* `set_allowed_networks` - Set allowed networks for a policy server

### System

* `create_archive` - Create an archive
* `get_healthcheck_result` - Get healthcheck
* `get_status` - Get server status
* `get_system_info` - Get server information
* `get_zip_archive` - Get an archive as a ZIP
* `list_archives` - List archives
* `purge_software` - Trigger batch for cleaning unreferenced software
* `regenerate_policies` - Trigger a new policy generation
* `reload_all` - Reload both techniques and dynamic groups
* `reload_groups` - Reload dynamic groups
* `reload_techniques` - Reload techniques
* `restore_archive` - Restore an archive
* `update_policies` - Trigger update of policies

### Techniques

* `list_technique_version_directives` - List all directives based on a version of a technique
* `list_techniques` - List all techniques
* `list_techniques_directives` - List all directives based on a technique

### 🧩 Branding

* `get_branding_conf` - Get branding configuration
* `reload_branding_conf` - Reload branding file
* `update_b_randing_conf` - Update web interface customization

### 🧩 CVE

* `check_cve` - Trigger a CVE check
* `get_all_cve` - Get all CVE details
* `get_cve_check_configuration` - Get CVE check config
* `get_cve_list` - Get a list of CVE details
* `get_last_cve_check` - Get last CVE check result
* `read_cv_efrom_fs` - Update CVE database from file system
* `update_cve` - Update CVE database from remote source
* `update_cve_check_configuration` - Update cve check config

### 🧩 Change requests

* `accept_change_request` - Accept a request details
* `change_request_details` - Get a change request details
* `decline_change_request` - Decline a request details
* `list_change_requests` - List all change requests
* `list_users` - List user
* `remove_validated_user` - Remove an user from validated user list
* `save_workflow_user` - Update validated user list
* `update_change_request` - Update a request details

### 🧩 Create Node

* `create_nodes` - Create a new node

### 🧩 Data sources

* `reload_all_datasources_all_nodes` - Update properties from data sources
* `reload_all_datasources_one_node` - Update properties for one node from all data sources
* `reload_one_datasource_all_nodes` - Update properties from data sources
* `reload_one_datasource_one_node` - Update properties for one node from a data source
* `create_data_source` - Create a data source
* `delete_data_source` - Delete a data source
* `get_all_data_sources` - List all data sources
* `get_data_source` - Get data source configuration
* `update_data_source` - Update a data source configuration

### 🧩 Scale out Relay

* `promote_to_relay` - Promote a node to relay

### 🧩 User Management

* `add_user` - Add user
* `delete_user` - Delete an user
* `get_role` - List all roles
* `get_user_info` - List all users
* `reload_user_conf` - Reload user
* `update_user` - Update user's infos

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
