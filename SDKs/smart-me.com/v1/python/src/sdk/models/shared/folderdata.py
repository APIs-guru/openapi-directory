from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FolderData:
    electricity_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElectricityCounterValue' }})
    electricity_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElectricityPower' }})
    gas_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GasCounterValue' }})
    gas_flow_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GasFlowRate' }})
    heat_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeatCounterValue' }})
    heat_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeatPower' }})
    water_counter_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaterCounterValue' }})
    water_flow_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaterFlowRate' }})
    
