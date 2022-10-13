from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta19:
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
