from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NearbyAttributes:
    max_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_time' }})
    min_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_time' }})
    
