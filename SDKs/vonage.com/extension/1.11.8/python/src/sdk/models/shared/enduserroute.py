from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndUserRoute:
    block_caller_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_caller_id') }})
    caller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_id') }})
    dids: Optional[List[Did]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dids') }})
    dnd_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnd_enabled') }})
    extension_handsets: Optional[List[Line]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_handsets') }})
    extension_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    location_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    user: Optional[BasicUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vtt_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vtt_enabled') }})
    
