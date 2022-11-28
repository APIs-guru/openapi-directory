from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetCurrentUsersProfileHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetCurrentUsersProfileSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetCurrentUsersProfileRequest:
    headers: EndpointGetCurrentUsersProfileHeaders = field()
    security: EndpointGetCurrentUsersProfileSecurity = field()
    

@dataclass
class EndpointGetCurrentUsersProfileResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    private_user_object: Optional[shared.PrivateUserObject] = field(default=None)
    
