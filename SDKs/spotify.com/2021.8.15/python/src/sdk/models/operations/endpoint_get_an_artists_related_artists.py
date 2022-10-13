from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistsRelatedArtistsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsRequest:
    path_params: EndpointGetAnArtistsRelatedArtistsPathParams = field(default=None)
    headers: EndpointGetAnArtistsRelatedArtistsHeaders = field(default=None)
    security: EndpointGetAnArtistsRelatedArtistsSecurity = field(default=None)
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsResponse:
    artists_object: Optional[shared.ArtistsObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
