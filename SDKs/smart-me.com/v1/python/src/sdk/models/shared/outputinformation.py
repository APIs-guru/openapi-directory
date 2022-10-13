from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OutputInformationActionTypeEnum(str, Enum):
    ON_OFF_ACTION = "OnOffAction"
    ANALOG_ACTION = "AnalogAction"


@dataclass_json
@dataclass
class OutputInformation:
    action_type: Optional[OutputInformationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    obis_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObisCode' }})
    
