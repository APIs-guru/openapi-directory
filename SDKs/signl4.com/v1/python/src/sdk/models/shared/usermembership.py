from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserMembership:
    is_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isValid' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    
