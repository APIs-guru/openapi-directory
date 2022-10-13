from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PasswordCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
