from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDMembershipsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDMembershipsRequests:
    users_invitation: Optional[shared.UsersInvitation] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    users_invitation1: Optional[shared.UsersInvitation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    users_invitation2: Optional[shared.UsersInvitation] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    users_invitation3: Optional[shared.UsersInvitation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDMembershipsRequest:
    path_params: PostTeamsTeamIDMembershipsPathParams = field()
    request: Optional[PostTeamsTeamIDMembershipsRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDMembershipsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_invitation_results: Optional[List[shared.UserInvitationResult]] = field(default=None)
    
