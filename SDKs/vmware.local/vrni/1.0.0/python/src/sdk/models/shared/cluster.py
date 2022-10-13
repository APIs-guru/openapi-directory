from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import reference
from . import reference


@dataclass_json
@dataclass
class Cluster:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsx_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsx_manager' }})
    num_cpu_cores: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_cpu_cores' }})
    num_datastores: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_datastores' }})
    num_hosts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_hosts' }})
    total_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_cpus' }})
    total_memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_memory' }})
    vcenter_manager: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcenter_manager' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    
