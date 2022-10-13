from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTeamMemberPathParams:
    team_member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTeamMemberSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTeamMemberRequest:
    path_params: UpdateTeamMemberPathParams = field(default=None)
    request: shared.UpdateTeamMemberRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTeamMemberSecurity = field(default=None)
    

@dataclass
class UpdateTeamMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_team_member_response: Optional[shared.UpdateTeamMemberResponse] = field(default=None)
    
