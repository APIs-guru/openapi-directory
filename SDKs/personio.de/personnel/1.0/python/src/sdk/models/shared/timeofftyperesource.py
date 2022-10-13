from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeOffTypeResourceAttributes:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class TimeOffTypeResourceTypeEnum(str, Enum):
    TIME_OFF_TYPE = "TimeOffType"


@dataclass_json
@dataclass
class TimeOffTypeResource:
    attributes: Optional[TimeOffTypeResourceAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[TimeOffTypeResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
