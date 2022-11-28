from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VirtualTariffConsumptionDataTariffTypeEnum(str, Enum):
    BATTERY = "Battery"
    SOLAR = "Solar"
    NORMAL = "Normal"


@dataclass_json
@dataclass
class VirtualTariffConsumptionData:
    r"""VirtualTariffConsumptionData
    Container class for the virtual tariff consumption
    """
    
    consumption: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Consumption') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    tariff_type: Optional[VirtualTariffConsumptionDataTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TariffType') }})
    
