from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VirtualTariffTypeEnum(str, Enum):
    BATTERY = "Battery"
    SOLAR = "Solar"
    NORMAL = "Normal"


@dataclass_json
@dataclass
class VirtualTariff:
    r"""VirtualTariff
    Container class for the virtual tariffs
    """
    
    factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Factor') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[VirtualTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
