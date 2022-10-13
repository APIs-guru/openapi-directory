from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import teammember


@dataclass_json
@dataclass
class CreateTeamMemberResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_member: Optional[teammember.TeamMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member' }})
    
