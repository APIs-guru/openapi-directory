from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PicoLoadmanagementGroupDto:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    max_current: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCurrent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_stations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfStations' }})
    
