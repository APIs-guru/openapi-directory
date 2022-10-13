from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import ipv4address
from . import reference
from . import reference


@dataclass_json
@dataclass
class VCenterManager:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    ip_address: Optional[ipv4address.IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsx_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsx_manager' }})
    vm: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm' }})
    
