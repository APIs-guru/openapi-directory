from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PermissionPermissionPolicyEnum(str, Enum):
    ALLOW = "Allow"
    DENY = "Deny"

class PermissionPermissionVerbsEnum(str, Enum):
    READ = "Read"
    WRITE = "Write"
    DELETE = "Delete"
    ALL = "All"


@dataclass_json
@dataclass
class PermissionPermission:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    policy: Optional[PermissionPermissionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    verbs: Optional[PermissionPermissionVerbsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Verbs') }})
    

@dataclass_json
@dataclass
class Permission:
    permission: Optional[PermissionPermission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
