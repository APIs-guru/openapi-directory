from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupConfiguration:
    co2_emission: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'co2Emission' }})
    energy_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyCost' }})
    group_name_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupNameFilter' }})
    
