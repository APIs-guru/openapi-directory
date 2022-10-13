from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import teammemberwage


@dataclass_json
@dataclass
class GetTeamMemberWageResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_member_wage: Optional[teammemberwage.TeamMemberWage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_wage' }})
    
