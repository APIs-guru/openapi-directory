from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutTeamsTeamIDMembershipsUserIDPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDQueryParams:
    requester_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requesterUserId', 'style': 'form', 'explode': True }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDRequestsInput:
    user_membership: Optional[shared.UserMembershipInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_membership1: Optional[shared.UserMembershipInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_membership2: Optional[shared.UserMembershipInput] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    user_membership3: Optional[shared.UserMembershipInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDRequest:
    path_params: PutTeamsTeamIDMembershipsUserIDPathParams = field()
    query_params: PutTeamsTeamIDMembershipsUserIDQueryParams = field()
    request: Optional[PutTeamsTeamIDMembershipsUserIDRequestsInput] = field(default=None)
    

@dataclass
class PutTeamsTeamIDMembershipsUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_info: Optional[shared.UserInfo] = field(default=None)
    
