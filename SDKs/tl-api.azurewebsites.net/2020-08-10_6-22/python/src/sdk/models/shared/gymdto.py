from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GymDto:
    external_gym_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalGymNumber' }})
    gym_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymId' }})
    gym_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
