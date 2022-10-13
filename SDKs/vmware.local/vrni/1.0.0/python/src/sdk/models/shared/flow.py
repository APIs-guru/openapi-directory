from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import reference
from . import reference
from . import reference
from . import ipv4address
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import entitytype_enum
from . import firewallaction_enum
from . import flowtag_enum
from . import portrange
from . import protocol_enum
from . import reference
from . import reference
from . import reference
from . import reference
from . import ipv4address
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import reference
from . import flowtraffictype_enum


@dataclass_json
@dataclass
class Flow:
    destination_cluster: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_cluster' }})
    destination_datacenter: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_datacenter' }})
    destination_folders: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_folders' }})
    destination_host: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_host' }})
    destination_ip: Optional[ipv4address.IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ip' }})
    destination_ip_sets: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ip_sets' }})
    destination_l2_network: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_l2_network' }})
    destination_resource_pool: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_resource_pool' }})
    destination_security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_security_groups' }})
    destination_security_tags: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_security_tags' }})
    destination_vm: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_vm' }})
    destination_vm_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_vm_tags' }})
    destination_vnic: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_vnic' }})
    destination_vpc: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_vpc' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    firewall_action: Optional[firewallaction_enum.FirewallActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall_action' }})
    flow_tag: Optional[List[flowtag_enum.FlowTagEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow_tag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[portrange.PortRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[protocol_enum.ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_cluster: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_cluster' }})
    source_datacenter: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_datacenter' }})
    source_folders: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_folders' }})
    source_host: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_host' }})
    source_ip: Optional[ipv4address.IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ip' }})
    source_ip_sets: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ip_sets' }})
    source_l2_network: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_l2_network' }})
    source_resource_pool: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_resource_pool' }})
    source_security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_security_groups' }})
    source_security_tags: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_security_tags' }})
    source_vm: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_vm' }})
    source_vm_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_vm_tags' }})
    source_vnic: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_vnic' }})
    source_vpc: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_vpc' }})
    traffic_type: Optional[flowtraffictype_enum.FlowTrafficTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic_type' }})
    within_host: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'within_host' }})
    
