from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import reference
from . import reference


@dataclass_json
@dataclass
class DistributedVirtualSwitch:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    hosts: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hosts' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    vcenter_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcenter_manager' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    
