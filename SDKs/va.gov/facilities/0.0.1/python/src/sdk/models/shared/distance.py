from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Distance:
    distance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
