from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import reference
from . import ipv4address
from . import reference
from . import vlan


@dataclass_json
@dataclass
class Vmknic:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    host: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    ip_addresses: Optional[List[ipv4address.IPV4Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    layer2_network: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layer2_network' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    vlan: Optional[vlan.Vlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
