from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamMemberWagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMemberWageSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamMemberWageRequest:
    path_params: GetTeamMemberWagePathParams = field(default=None)
    security: GetTeamMemberWageSecurity = field(default=None)
    

@dataclass
class GetTeamMemberWageResponse:
    content_type: str = field(default=None)
    get_team_member_wage_response: Optional[shared.GetTeamMemberWageResponse] = field(default=None)
    status_code: int = field(default=None)
    
