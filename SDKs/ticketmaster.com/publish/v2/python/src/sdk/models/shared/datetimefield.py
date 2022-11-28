from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DateTimeField:
    duration_field: Optional[DurationField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationField') }})
    leap_duration_field: Optional[DurationField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leapDurationField') }})
    lenient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lenient') }})
    maximum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumValue') }})
    minimum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range_duration_field: Optional[DurationField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeDurationField') }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    type: Optional[DateTimeFieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
