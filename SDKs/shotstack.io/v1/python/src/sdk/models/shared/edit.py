from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import output
from . import timeline

class EditDiskEnum(str, Enum):
    LOCAL = "local"
    MOUNT = "mount"


@dataclass_json
@dataclass
class Edit:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback' }})
    disk: Optional[EditDiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    output: output.Output = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    timeline: timeline.Timeline = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeline' }})
    
