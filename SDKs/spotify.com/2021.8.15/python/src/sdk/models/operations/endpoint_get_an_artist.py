from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistRequest:
    path_params: EndpointGetAnArtistPathParams = field(default=None)
    headers: EndpointGetAnArtistHeaders = field(default=None)
    security: EndpointGetAnArtistSecurity = field(default=None)
    

@dataclass
class EndpointGetAnArtistResponse:
    artist_object: Optional[shared.ArtistObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
