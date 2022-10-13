from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import teammember


@dataclass_json
@dataclass
class SearchTeamMembersResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_members: Optional[List[teammember.TeamMember]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_members' }})
    
