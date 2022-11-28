from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OutputInformationActionTypeEnum(str, Enum):
    ON_OFF_ACTION = "OnOffAction"
    ANALOG_ACTION = "AnalogAction"


@dataclass_json
@dataclass
class OutputInformation:
    r"""OutputInformation
    Informations about the Outputs of a Meter or Folder
    """
    
    action_type: Optional[OutputInformationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    obis_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObisCode') }})
    
