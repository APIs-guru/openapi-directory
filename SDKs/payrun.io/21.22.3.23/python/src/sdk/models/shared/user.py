from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserUserPermission:
    r"""UserUserPermission
    The users' permissions
    """
    
    permission: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    

@dataclass_json
@dataclass
class UserUserRoles:
    r"""UserUserRoles
    The users' roles
    """
    
    role: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

@dataclass_json
@dataclass
class UserUser:
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    permissions: Optional[UserUserPermission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    roles: Optional[UserUserRoles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserIdentifier') }})
    

@dataclass_json
@dataclass
class User:
    user: Optional[UserUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
