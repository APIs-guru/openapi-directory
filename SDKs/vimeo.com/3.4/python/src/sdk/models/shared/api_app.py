from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIApp:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
