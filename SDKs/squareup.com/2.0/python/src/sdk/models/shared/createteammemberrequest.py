from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import teammember


@dataclass_json
@dataclass
class CreateTeamMemberRequest:
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    team_member: Optional[teammember.TeamMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member' }})
    
