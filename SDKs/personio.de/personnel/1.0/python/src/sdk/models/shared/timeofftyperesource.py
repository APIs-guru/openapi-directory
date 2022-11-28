from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeOffTypeResourceAttributes:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class TimeOffTypeResourceTypeEnum(str, Enum):
    TIME_OFF_TYPE = "TimeOffType"


@dataclass_json
@dataclass
class TimeOffTypeResource:
    attributes: Optional[TimeOffTypeResourceAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[TimeOffTypeResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
