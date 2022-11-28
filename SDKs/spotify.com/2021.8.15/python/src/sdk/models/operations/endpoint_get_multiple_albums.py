from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetMultipleAlbumsQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetMultipleAlbumsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetMultipleAlbumsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetMultipleAlbumsRequest:
    headers: EndpointGetMultipleAlbumsHeaders = field()
    query_params: EndpointGetMultipleAlbumsQueryParams = field()
    security: EndpointGetMultipleAlbumsSecurity = field()
    

@dataclass
class EndpointGetMultipleAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    albums_object: Optional[shared.AlbumsObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
