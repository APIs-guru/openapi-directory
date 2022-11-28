from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Credit:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    video: Optional[Video] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
