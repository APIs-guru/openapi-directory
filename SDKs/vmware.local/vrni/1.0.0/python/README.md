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
    
req = operations.AddApplicationRequest(
    security=operations.AddApplicationSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.ApplicationRequest(
        name="qui",
    ),
)
    
res = s.applications.add_application(req)

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Applications

* `add_application` - Create an application
* `add_tier` - Create tier in application
* `delete_application` - Delete an application
* `delete_tier` - Delete tier
* `get_application` - Show application details
* `get_application_tier` - Show tier details
* `get_tier` - Show tier details
* `list_application_tiers` - List tiers of an application
* `list_applications` - List applications

### Authentication

* `create` - Create an auth token
* `delete` - Delete an auth token.

### Data Sources

* `add_arista_switch` - Create an arista switch data source
* `add_brocade_switch` - Create a brocade switch data source
* `add_checkpoint_firewall` - Create a checkpoint firewall
* `add_cisco_switch` - Create a cisco switch data source
* `add_dell_switch` - Create a dell switch data source
* `add_hpov_manager` - Create a hp oneview manager data source
* `add_hpvc_manager` - Create a hpvc manager data source
* `add_juniper_switch` - Add a juniper switch as data source
* `add_nsxv_manager_datasource` - Create a nsx-v manager data source
* `add_panorama_firewall` - Create panorama firewall data source
* `add_ucs_manager` - Create an ucs manager data source
* `add_vcenter_datasource` - Create a vCenter data source
* `delete_arista_switch` - Delete an arista switch data source
* `delete_brocade_switch` - Delete a brocade switch data source
* `delete_checkpoint_firewall` - Delete a checkpoint firewall data source
* `delete_cisco_switch` - Delete a cisco switch data source
* `delete_dell_switch` - Delete a dell switch data source
* `delete_hpov_manager` - Delete a hp oneview data source
* `delete_hpvc_manager` - Delete a hpvc manager data source
* `delete_juniper_switch` - Delete a juniper switch data source
* `delete_nsxv_manager` - Delete a nsx-v manager data source
* `delete_panorama_firewall` - Delete a panorama firewall data source
* `delete_ucs_manager` - Delete an ucs manager data source
* `delete_vcenter` - Delete a vCenter data source
* `disable_arista_switch` - Disable an arista switch data source
* `disable_brocade_switch` - Disable a brocade switch data source
* `disable_checkpoint_firewall` - Disable a checkpoint firewall data source
* `disable_cisco_switch` - Disable a cisco switch data source
* `disable_dell_switch` - Disable a dell switch data source
* `disable_hpov_manager` - Disable a hp oneview data source
* `disable_hpvc_manager` - Disable a hpvc manager data source
* `disable_juniper_switch` - Disable a juniper switch data source
* `disable_nsxv_manager` - Disable a nsx-v manager data source
* `disable_panorama_firewall` - Disable a panorama firewall data source
* `disable_ucs_manager` - Disable an ucs manager data source
* `disable_vcenter` - Disable a vCenter data source
* `enable_arista_switch` - Enable an arista switch data source
* `enable_brocade_switch` - Enable a brocade switch data source
* `enable_checkpoint_firewall` - Enable a checkpoint firewall data source
* `enable_cisco_switch` - Enable a cisco switch data source
* `enable_dell_switch` - Enable a dell switch data source
* `enable_hpov_manager` - Enable a hp oneview data source
* `enable_hpvc_manager` - Enable a hpvc manager data source
* `enable_juniper_switch` - Enable a juniper switch data source
* `enable_nsxv_manager` - Enable a nsx-v manager data source
* `enable_panorama_firewall` - Enable a panorama firewall data source
* `enable_ucs_manager` - Enable an ucs manager data source
* `enable_vcenter` - Enable a vCenter data source
* `get_arista_switch` - Show arista switch data source details
* `get_arista_switch_snmp_config` - Show snmp config for arista switch data source
* `get_brocade_switch` - Show brocade switch data source details
* `get_brocade_switch_snmp_config` - Show snmp config for brocade switch data source
* `get_checkpoint_firewall` - Show checkpoint firewall data source details
* `get_cisco_switch` - Show cisco switch data source details
* `get_cisco_switch_snmp_config` - Show snmp config for cisco switch data source
* `get_dell_switch` - Show dell switch data source details
* `get_dell_switch_snmp_config` - Show snmp config for dell switch data source
* `get_hpov_manager` - Show hp oneview data source details
* `get_hpvc_manager` - Show hpvc data source details
* `get_juniper_switch` - Show juniper switch data source details
* `get_juniper_switch_snmp_config` - Show snmp config for juniper switch data source
* `get_nsxv_controller_cluster` - Show nsx controller-cluster details
* `get_nsxv_manager` - Show nsx-v manager data source details
* `get_panorama_firewall` - Show panorama firewall data source details
* `get_ucs_manager` - Show ucs manager data source details
* `get_ucs_snmp_config` - Show snmp config for ucs fabric interconnects
* `get_vcenter` - Show vCenter data source details
* `list_arista_switches` - List arista switch data sources
* `list_brocade_switches` - List brocade switch data sources
* `list_checkpoint_firewalls` - List checkpoint firewall data sources
* `list_cisco_switches` - List cisco switch data sources
* `list_dell_switches` - List dell switch data sources
* `list_hpov_managers` - List hp oneview manager data sources
* `list_hpvc_managers` - List hpvc manager data sources
* `list_juniper_switches` - List juniper switch data sources
* `list_nsxv_managers` - List nsx-v manager data sources
* `list_panorama_firewalls` - List panorama firewall data sources
* `list_ucs_managers` - List ucs manager data sources
* `list_vcenters` - List vCenter data sources
* `update_arista_switch` - Update an arista switch data source
* `update_arista_switch_snmp_config` - Update snmp config for arista switch data source
* `update_brocade_switch` - Update a brocade switch data source
* `update_brocade_switch_snmp_config` - Update snmp config for brocade switch data source
* `update_checkpoint_firewall` - Update a checkpoint firewall data source
* `update_cisco_switch` - Update a cisco switch data source
* `update_cisco_switch_snmp_config` - Update snmp config for cisco switch data source
* `update_dell_switch` - Update a dell switch data source
* `update_dell_switch_snmp_config` - Update snmp config for dell switch data source
* `update_hpov_manager` - Update a hp oneview data source
* `update_hpvc_manager` - Update a hpvc manager data source
* `update_juniper_switch` - Update a juniper switch data source
* `update_juniper_switch_snmp_config` - Update snmp config for a juniper switch data source
* `update_nsxv_controller_cluster` - Update nsx controller-cluster details
* `update_nsxv_manager` - Update a nsx-v manager data source
* `update_panorama_firewall` - Update a panorama firewall data source
* `update_ucs_manager` - Update an ucs manager data source
* `update_ucs_snmp_config` - Update snmp config for ucs fabric interconnects
* `update_vcenter` - Update a vCenter data source.

### Entities

* `get_cluster` - Show cluster details
* `get_datacenter` - Show vCenter datacenter details
* `get_datastore` - Show datastore details
* `get_distributed_virtual_portgroup` - Show distributed virtual portgroup details
* `get_distributed_virtual_switch` - Show distributed virtual switch details
* `get_firewall` - Show firewall details
* `get_firewall_rule` - Show firewall rule details
* `get_flow` - Show flow details
* `get_flows` - List flows
* `get_folder` - Show folder details
* `get_host` - Show host details
* `get_ip_set` - Show ip set details
* `get_layer2_network` - Show layer2 network details
* `get_nsx_manager` - Show nsx manager details
* `get_name` - Get name of an entity
* `get_names` - Get names for entities
* `get_problem_event` - Show problem details
* `get_security_group` - Show security group details
* `get_security_tag` - Show security tag details
* `get_service` - Show service details
* `get_service_group` - Show service group details
* `get_vcenter_manager` - Show vCenter manager details
* `get_vm` - Show vm details
* `get_vmknic` - Show vmknic details
* `get_vnic` - Show vnic details
* `list_clusters` - List clusters
* `list_datacenters` - List vCenter datacenters
* `list_datastores` - List datastores
* `list_distributed_virtual_portgroups` - List distributed virtual portgroups
* `list_distributed_virtual_switches` - List distributed virtual switches
* `list_firewall_rules` - List firewall rules
* `list_firewalls` - List firewalls
* `list_folders` - List folders
* `list_hosts` - List hosts
* `list_ip_sets` - List ip sets
* `list_layer2_networks` - List layer2 networks
* `list_nsx_managers` - List nsx managers
* `list_problem_events` - List problems
* `list_security_groups` - List security groups
* `list_security_tags` - List security tags
* `list_service_groups` - List service groups
* `list_services` - List services
* `list_vcenter_managers` - List vCenter managers
* `list_vmknics` - List vmknics
* `list_vms` - List vms
* `list_vnics` - List vnics

### Info

* `get_version` - Show version info

### Infrastructure

* `get_node` - Show node details
* `list_nodes` - List nodes

### Microsegmentation

* `export_nsx_recommended_rules` - Export recommended rules for NSX-V
* `list_recommended_rules` - Get logical recommended rules

### Search

* `search_entities` - Search entities

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
