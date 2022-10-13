from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import domain


@dataclass_json
@dataclass
class UserCredential:
    domain: Optional[domain.Domain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
