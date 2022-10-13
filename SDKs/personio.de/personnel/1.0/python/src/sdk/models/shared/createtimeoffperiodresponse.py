from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class CreateTimeOffPeriodResponseDataTypeEnum(str, Enum):
    TIME_OFF_PERIOD = "TimeOffPeriod"


@dataclass_json
@dataclass
class CreateTimeOffPeriodResponseData:
    attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    type: Optional[CreateTimeOffPeriodResponseDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreateTimeOffPeriodResponse:
    data: CreateTimeOffPeriodResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
