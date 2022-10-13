from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PermissionPermissionPolicyPolicyEnum(str, Enum):
    ALLOW = "Allow"
    DENY = "Deny"

class PermissionPermissionVerbsVerbsEnum(str, Enum):
    READ = "Read"
    WRITE = "Write"
    DELETE = "Delete"
    ALL = "All"


@dataclass_json
@dataclass
class PermissionPermissionPermission:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policy: Optional[PermissionPermissionPolicyPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    verbs: Optional[PermissionPermissionVerbsVerbsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Verbs' }})
    

@dataclass_json
@dataclass
class Permission:
    permission: Optional[PermissionPermissionPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    
