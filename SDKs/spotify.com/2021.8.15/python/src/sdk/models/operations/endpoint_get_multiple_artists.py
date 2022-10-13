from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleArtistsQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleArtistsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetMultipleArtistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleArtistsRequest:
    query_params: EndpointGetMultipleArtistsQueryParams = field(default=None)
    headers: EndpointGetMultipleArtistsHeaders = field(default=None)
    security: EndpointGetMultipleArtistsSecurity = field(default=None)
    

@dataclass
class EndpointGetMultipleArtistsResponse:
    artists_object: Optional[shared.ArtistsObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
