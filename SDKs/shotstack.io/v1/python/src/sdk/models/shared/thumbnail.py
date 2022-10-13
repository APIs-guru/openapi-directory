from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Thumbnail:
    capture: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capture' }})
    scale: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    
