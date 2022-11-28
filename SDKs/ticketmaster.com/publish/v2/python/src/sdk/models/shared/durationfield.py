from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DurationField:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precise: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precise') }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    type: Optional[DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitMillis') }})
    
