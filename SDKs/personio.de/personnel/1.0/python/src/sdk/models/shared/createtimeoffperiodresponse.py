from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateTimeOffPeriodResponseDataTypeEnum(str, Enum):
    TIME_OFF_PERIOD = "TimeOffPeriod"


@dataclass_json
@dataclass
class CreateTimeOffPeriodResponseData:
    attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[CreateTimeOffPeriodResponseDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateTimeOffPeriodResponse:
    data: CreateTimeOffPeriodResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
