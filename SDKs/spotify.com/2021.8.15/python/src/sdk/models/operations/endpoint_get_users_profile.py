from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetUsersProfilePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersProfileHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersProfileSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetUsersProfileRequest:
    headers: EndpointGetUsersProfileHeaders = field()
    path_params: EndpointGetUsersProfilePathParams = field()
    security: EndpointGetUsersProfileSecurity = field()
    

@dataclass
class EndpointGetUsersProfileResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    public_user_object: Optional[shared.PublicUserObject] = field(default=None)
    
