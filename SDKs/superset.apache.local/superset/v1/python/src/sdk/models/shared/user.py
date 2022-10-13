from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
