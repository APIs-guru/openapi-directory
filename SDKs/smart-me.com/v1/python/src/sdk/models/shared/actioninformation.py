from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ActionInformationActionTypeEnum(str, Enum):
    ON_OFF_ACTION = "OnOffAction"
    ANALOG_ACTION = "AnalogAction"


@dataclass_json
@dataclass
class ActionInformation:
    action_type: Optional[ActionInformationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    obis_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObisCode' }})
    
