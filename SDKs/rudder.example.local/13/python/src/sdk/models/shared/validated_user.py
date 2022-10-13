from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidatedUser:
    is_validated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isValidated' }})
    user_exists: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userExists' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
