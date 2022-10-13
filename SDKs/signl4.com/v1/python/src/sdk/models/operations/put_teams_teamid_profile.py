from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutTeamsTeamIDProfilePathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTeamsTeamIDProfileRequests:
    team_profile: Optional[shared.TeamProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    team_profile1: Optional[shared.TeamProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    team_profile2: Optional[shared.TeamProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    team_profile3: Optional[shared.TeamProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutTeamsTeamIDProfileRequest:
    path_params: PutTeamsTeamIDProfilePathParams = field(default=None)
    request: Optional[PutTeamsTeamIDProfileRequests] = field(default=None)
    

@dataclass
class PutTeamsTeamIDProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    team_info: Optional[shared.TeamInfo] = field(default=None)
    
