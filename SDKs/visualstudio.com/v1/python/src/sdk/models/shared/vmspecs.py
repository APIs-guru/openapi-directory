from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VMSpecs:
    disk_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    image_resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageResourceId') }})
    size: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    subnet_resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetResourceId') }})
    
