from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionInformationActionTypeEnum(str, Enum):
    ON_OFF_ACTION = "OnOffAction"
    ANALOG_ACTION = "AnalogAction"


@dataclass_json
@dataclass
class ActionInformation:
    r"""ActionInformation
    The Information about an Action of a device
    """
    
    action_type: Optional[ActionInformationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    obis_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObisCode') }})
    
