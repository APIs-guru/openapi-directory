from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import createteammemberrequest


@dataclass_json
@dataclass
class BulkCreateTeamMembersRequest:
    team_members: dict[str, createteammemberrequest.CreateTeamMemberRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_members' }})
    
