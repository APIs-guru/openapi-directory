from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalTime:
    chronology: Optional[Chronology] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chronology') }})
    field_types: Optional[List[DateTimeFieldType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTypes') }})
    fields: Optional[List[DateTimeField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    hour_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourOfDay') }})
    millis_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('millisOfDay') }})
    millis_of_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('millisOfSecond') }})
    minute_of_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minuteOfHour') }})
    second_of_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondOfMinute') }})
    values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
