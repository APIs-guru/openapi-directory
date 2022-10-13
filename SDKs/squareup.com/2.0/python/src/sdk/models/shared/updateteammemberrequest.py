from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import teammember


@dataclass_json
@dataclass
class UpdateTeamMemberRequest:
    team_member: Optional[teammember.TeamMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member' }})
    
