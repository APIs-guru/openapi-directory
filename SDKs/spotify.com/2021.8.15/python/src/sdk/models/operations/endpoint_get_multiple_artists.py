from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleArtistsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleArtistsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleArtistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleArtistsRequest:
    headers: EndpointGetMultipleArtistsHeaders = field()
    query_params: EndpointGetMultipleArtistsQueryParams = field()
    security: EndpointGetMultipleArtistsSecurity = field()
    

@dataclass
class EndpointGetMultipleArtistsResponse:
    content_type: str = field()
    status_code: int = field()
    artists_object: Optional[shared.ArtistsObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
