from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InputConfigurationContainerTypeEnum(str, Enum):
    TARIFF_INPUT = "TariffInput"
    DIGITAL_INPUT = "DigitalInput"


@dataclass_json
@dataclass
class InputConfigurationContainer:
    r"""InputConfigurationContainer
    Configuration for the input of a meter (digital inputs)
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    off_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffText') }})
    on_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnText') }})
    type: Optional[InputConfigurationContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
