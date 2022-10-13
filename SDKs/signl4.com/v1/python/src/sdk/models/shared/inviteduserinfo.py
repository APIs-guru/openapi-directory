from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvitedUserInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_invite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInvite' }})
    mail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    
