from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EditDiskEnum(str, Enum):
    LOCAL = "local"
    MOUNT = "mount"


@dataclass_json
@dataclass
class Edit:
    r"""Edit
    An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
    """
    
    output: Output = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    timeline: Timeline = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline') }})
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    disk: Optional[EditDiskEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    
