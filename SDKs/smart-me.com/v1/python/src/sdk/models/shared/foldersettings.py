from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FolderSettingsFolderTypeEnum(str, Enum):
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
class FolderSettings:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enable' }, 'form': { 'field_name': 'Enable' }})
    folder_type: Optional[FolderSettingsFolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FolderType' }, 'form': { 'field_name': 'FolderType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentFolderId' }, 'form': { 'field_name': 'ParentFolderId' }})
    serial_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }, 'form': { 'field_name': 'SerialNumber' }})
    useable_for_virtual_billing_meters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseableForVirtualBillingMeters' }, 'form': { 'field_name': 'UseableForVirtualBillingMeters' }})
    value_correction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueCorrection' }, 'form': { 'field_name': 'ValueCorrection' }})
    value_correction_parent_folder: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueCorrectionParentFolder' }, 'form': { 'field_name': 'ValueCorrectionParentFolder' }})
    visualization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisualizationName' }, 'form': { 'field_name': 'VisualizationName' }})
    
