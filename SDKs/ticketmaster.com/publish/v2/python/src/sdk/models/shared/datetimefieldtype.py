from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DateTimeFieldType:
    duration_type: Optional[DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range_duration_type: Optional[DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeDurationType') }})
    
