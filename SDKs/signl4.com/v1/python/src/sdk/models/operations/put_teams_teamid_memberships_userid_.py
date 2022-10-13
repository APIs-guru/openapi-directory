from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutTeamsTeamIDMembershipsUserIDPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDQueryParams:
    requester_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requesterUserId', 'style': 'form', 'explode': True }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDRequests:
    user_membership: Optional[shared.UserMembership] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_membership1: Optional[shared.UserMembership] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_membership2: Optional[shared.UserMembership] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    user_membership3: Optional[shared.UserMembership] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDRequest:
    path_params: PutTeamsTeamIDMembershipsUserIDPathParams = field(default=None)
    query_params: PutTeamsTeamIDMembershipsUserIDQueryParams = field(default=None)
    request: Optional[PutTeamsTeamIDMembershipsUserIDRequests] = field(default=None)
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    user_info: Optional[shared.UserInfo] = field(default=None)
    
