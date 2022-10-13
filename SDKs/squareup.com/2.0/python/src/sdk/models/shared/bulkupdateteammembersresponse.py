from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import updateteammemberresponse


@dataclass_json
@dataclass
class BulkUpdateTeamMembersResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_members: Optional[dict[str, updateteammemberresponse.UpdateTeamMemberResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_members' }})
    
