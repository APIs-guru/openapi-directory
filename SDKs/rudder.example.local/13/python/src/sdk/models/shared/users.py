from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Users:
    is_pre_hahed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPreHahed' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
