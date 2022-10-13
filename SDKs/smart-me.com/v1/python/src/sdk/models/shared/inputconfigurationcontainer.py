from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InputConfigurationContainerTypeEnum(str, Enum):
    TARIFF_INPUT = "TariffInput"
    DIGITAL_INPUT = "DigitalInput"


@dataclass_json
@dataclass
class InputConfigurationContainer:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    off_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OffText' }})
    on_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnText' }})
    type: Optional[InputConfigurationContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
