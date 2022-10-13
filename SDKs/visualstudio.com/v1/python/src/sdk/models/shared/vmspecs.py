from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMSpecs:
    disk_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    image_resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageResourceId' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    subnet_resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetResourceId' }})
    
