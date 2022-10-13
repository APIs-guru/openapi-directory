from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import firewallaction_enum
from . import reference
from . import entitytype_enum
from . import portrange
from . import reference
from . import reference


@dataclass_json
@dataclass
class BaseFirewallRule:
    action: Optional[firewallaction_enum.FirewallActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    destination_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_any' }})
    destination_inversion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_inversion' }})
    destinations: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port_ranges: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_ranges' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule_id' }})
    section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section_id' }})
    section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section_name' }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence_number' }})
    service_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_any' }})
    services: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    source_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_any' }})
    source_inversion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_inversion' }})
    sources: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
