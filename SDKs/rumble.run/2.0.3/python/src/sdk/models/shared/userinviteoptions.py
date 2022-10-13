from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserInviteOptions:
    client_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_admin' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    org_default_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_default_role' }})
    org_roles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_roles' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
