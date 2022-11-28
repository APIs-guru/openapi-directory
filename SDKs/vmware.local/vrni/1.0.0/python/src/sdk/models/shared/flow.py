from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Flow:
    destination_cluster: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_cluster') }})
    destination_datacenter: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_datacenter') }})
    destination_folders: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_folders') }})
    destination_host: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_host') }})
    destination_ip: Optional[IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ip') }})
    destination_ip_sets: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ip_sets') }})
    destination_l2_network: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_l2_network') }})
    destination_resource_pool: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_resource_pool') }})
    destination_security_groups: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_security_groups') }})
    destination_security_tags: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_security_tags') }})
    destination_vm: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_vm') }})
    destination_vm_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_vm_tags') }})
    destination_vnic: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_vnic') }})
    destination_vpc: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_vpc') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    firewall_action: Optional[FirewallActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall_action') }})
    flow_tag: Optional[List[FlowTagEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow_tag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[PortRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    source_cluster: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_cluster') }})
    source_datacenter: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_datacenter') }})
    source_folders: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_folders') }})
    source_host: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_host') }})
    source_ip: Optional[IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip') }})
    source_ip_sets: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip_sets') }})
    source_l2_network: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_l2_network') }})
    source_resource_pool: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_resource_pool') }})
    source_security_groups: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_security_groups') }})
    source_security_tags: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_security_tags') }})
    source_vm: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_vm') }})
    source_vm_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_vm_tags') }})
    source_vnic: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_vnic') }})
    source_vpc: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_vpc') }})
    traffic_type: Optional[FlowTrafficTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic_type') }})
    within_host: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('within_host') }})
    
