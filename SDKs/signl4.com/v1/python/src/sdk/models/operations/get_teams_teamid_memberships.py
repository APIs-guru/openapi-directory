from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDMembershipsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDMembershipsRequest:
    path_params: GetTeamsTeamIDMembershipsPathParams = field()
    

@dataclass
class GetTeamsTeamIDMembershipsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    invited_user_infos: Optional[List[shared.InvitedUserInfo]] = field(default=None)
    
