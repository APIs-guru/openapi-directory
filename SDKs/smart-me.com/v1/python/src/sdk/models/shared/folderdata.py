from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FolderData:
    r"""FolderData
    Container class for the folder API
    """
    
    electricity_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectricityCounterValue') }})
    electricity_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectricityPower') }})
    gas_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GasCounterValue') }})
    gas_flow_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GasFlowRate') }})
    heat_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeatCounterValue') }})
    heat_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeatPower') }})
    water_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaterCounterValue') }})
    water_flow_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaterFlowRate') }})
    
