from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinvite


@dataclass_json
@dataclass
class UsersInvitation:
    inviter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inviterId' }})
    invites: Optional[List[userinvite.UserInvite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invites' }})
    
