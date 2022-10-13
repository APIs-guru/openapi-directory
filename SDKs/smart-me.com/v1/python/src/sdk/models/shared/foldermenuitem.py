from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoexportsettings
from . import foldermenuitem

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
    auto_export_settings: Optional[autoexportsettings.AutoExportSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoExportSettings' }})
    children: Optional[List[foldermenuitem.FolderMenuItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Children' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    folder_type: Optional[FolderMenuItemFolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FolderType' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Icon' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    meter_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeterSerialNumber' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
