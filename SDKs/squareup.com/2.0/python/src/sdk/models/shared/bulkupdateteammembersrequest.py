from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import updateteammemberrequest


@dataclass_json
@dataclass
class BulkUpdateTeamMembersRequest:
    team_members: dict[str, updateteammemberrequest.UpdateTeamMemberRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_members' }})
    
