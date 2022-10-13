from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserUserPermissionsPermission:
    permission: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    

@dataclass_json
@dataclass
class UserUserRolesRoles:
    role: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    

@dataclass_json
@dataclass
class UserUserUser:
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    permissions: Optional[UserUserPermissionsPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    roles: Optional[UserUserRolesRoles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roles' }})
    user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserIdentifier' }})
    

@dataclass_json
@dataclass
class User:
    user: Optional[UserUserUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
