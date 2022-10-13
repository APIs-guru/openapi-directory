from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Color:
    alpha: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha' }})
    blue: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    green: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'green' }})
    red: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    
