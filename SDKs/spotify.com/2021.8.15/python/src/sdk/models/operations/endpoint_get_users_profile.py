from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetUsersProfilePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersProfileHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersProfileSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetUsersProfileRequest:
    path_params: EndpointGetUsersProfilePathParams = field(default=None)
    headers: EndpointGetUsersProfileHeaders = field(default=None)
    security: EndpointGetUsersProfileSecurity = field(default=None)
    

@dataclass
class EndpointGetUsersProfileResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    public_user_object: Optional[shared.PublicUserObject] = field(default=None)
    status_code: int = field(default=None)
    
