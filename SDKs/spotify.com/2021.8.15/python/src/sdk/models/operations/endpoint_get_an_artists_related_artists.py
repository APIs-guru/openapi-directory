from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistsRelatedArtistsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsRequest:
    headers: EndpointGetAnArtistsRelatedArtistsHeaders = field()
    path_params: EndpointGetAnArtistsRelatedArtistsPathParams = field()
    security: EndpointGetAnArtistsRelatedArtistsSecurity = field()
    

@dataclass
class EndpointGetAnArtistsRelatedArtistsResponse:
    content_type: str = field()
    status_code: int = field()
    artists_object: Optional[shared.ArtistsObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
