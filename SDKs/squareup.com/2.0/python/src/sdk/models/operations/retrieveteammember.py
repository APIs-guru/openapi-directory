from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveTeamMemberPathParams:
    team_member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveTeamMemberSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveTeamMemberRequest:
    path_params: RetrieveTeamMemberPathParams = field(default=None)
    security: RetrieveTeamMemberSecurity = field(default=None)
    

@dataclass
class RetrieveTeamMemberResponse:
    content_type: str = field(default=None)
    retrieve_team_member_response: Optional[shared.RetrieveTeamMemberResponse] = field(default=None)
    status_code: int = field(default=None)
    
