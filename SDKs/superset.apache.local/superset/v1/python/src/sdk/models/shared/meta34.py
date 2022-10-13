from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta34:
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    
