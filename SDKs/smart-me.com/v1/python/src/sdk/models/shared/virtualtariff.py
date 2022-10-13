from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VirtualTariffTypeEnum(str, Enum):
    BATTERY = "Battery"
    SOLAR = "Solar"
    NORMAL = "Normal"


@dataclass_json
@dataclass
class VirtualTariff:
    factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Factor' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[VirtualTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
