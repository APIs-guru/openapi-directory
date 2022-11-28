from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FolderMenuItemFolderTypeEnum(str, Enum):
    FOLDER = "Folder"
    LOCATION = "Location"
    FACTORY = "Factory"
    HOUSE = "House"
    OFFICE = "Office"
    MACHINE = "Machine"
    VIRTUAL_METER = "VirtualMeter"
    ELECTICITY_FOLDER = "ElecticityFolder"
    WATER_FOLDER = "WaterFolder"
    HEAT_FOLDER = "HeatFolder"
    GAS_FOLDER = "GasFolder"
    TEMPERATURE_FOLDER = "TemperatureFolder"
    SUN = "Sun"
    LIGHT = "Light"
    ICE = "Ice"
    SOFA = "Sofa"
    FOOD = "Food"
    COFFEE = "Coffee"
    CAR = "Car"
    CHARGING_STATION = "ChargingStation"
    METER = "Meter"
    USER = "User"
    TRASH = "Trash"
    GRID_PHOTOVOLTAIC_POWER_SYSTEM = "GridPhotovoltaicPowerSystem"


@dataclass_json
@dataclass
class FolderMenuItem:
    r"""FolderMenuItem
    A folder menu item
    """
    
    auto_export_settings: Optional[AutoExportSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoExportSettings') }})
    children: Optional[List[FolderMenuItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Children') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    folder_type: Optional[FolderMenuItemFolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FolderType') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Icon') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    meter_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeterSerialNumber') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
