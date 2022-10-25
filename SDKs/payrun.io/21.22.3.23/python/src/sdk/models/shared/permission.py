from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policy: Optional[PermissionPermissionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    verbs: Optional[PermissionPermissionVerbsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Verbs' }})
    

@dataclass_json
@dataclass
class Permission:
    permission: Optional[PermissionPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    
