from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class User:
    child_users: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChildUsers' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    id_as_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdAsString' }})
    is_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAdmin' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
