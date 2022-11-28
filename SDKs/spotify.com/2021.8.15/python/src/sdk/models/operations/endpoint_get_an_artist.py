from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistRequest:
    headers: EndpointGetAnArtistHeaders = field()
    path_params: EndpointGetAnArtistPathParams = field()
    security: EndpointGetAnArtistSecurity = field()
    

@dataclass
class EndpointGetAnArtistResponse:
    content_type: str = field()
    status_code: int = field()
    artist_object: Optional[shared.ArtistObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
