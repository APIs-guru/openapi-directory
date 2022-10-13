from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import reference
from . import entitytype_enum
from . import reference
from . import reference
from . import reference


@dataclass_json
@dataclass
class Host:
    cluster: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    connection_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_state' }})
    datastores: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastores' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    maintenance_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_mode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsx_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsx_manager' }})
    service_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_tag' }})
    vcenter_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcenter_manager' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm_count' }})
    vmknics: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmknics' }})
    
