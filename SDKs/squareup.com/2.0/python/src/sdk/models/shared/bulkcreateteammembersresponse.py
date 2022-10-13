from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import createteammemberresponse


@dataclass_json
@dataclass
class BulkCreateTeamMembersResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_members: Optional[dict[str, createteammemberresponse.CreateTeamMemberResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_members' }})
    
