from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import entitytype_enum
from . import reference
from . import reference


@dataclass_json
@dataclass
class SecurityTag:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    direct_security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_security_groups' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsx_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsx_manager' }})
    security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'security_groups' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    
