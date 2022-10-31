from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetCurrentUsersProfileHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetCurrentUsersProfileSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetCurrentUsersProfileRequest:
    headers: EndpointGetCurrentUsersProfileHeaders = field(default=None)
    security: EndpointGetCurrentUsersProfileSecurity = field(default=None)
    

@dataclass
class EndpointGetCurrentUsersProfileResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    private_user_object: Optional[shared.PrivateUserObject] = field(default=None)
    status_code: int = field(default=None)
    
