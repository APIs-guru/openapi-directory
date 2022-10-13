from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VirtualTariffConsumptionDataTariffTypeEnum(str, Enum):
    BATTERY = "Battery"
    SOLAR = "Solar"
    NORMAL = "Normal"


@dataclass_json
@dataclass
class VirtualTariffConsumptionData:
    consumption: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Consumption' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    tariff_type: Optional[VirtualTariffConsumptionDataTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffType' }})
    
