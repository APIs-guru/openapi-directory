from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnAlbumPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnAlbumQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnAlbumHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnAlbumSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnAlbumRequest:
    headers: EndpointGetAnAlbumHeaders = field()
    path_params: EndpointGetAnAlbumPathParams = field()
    query_params: EndpointGetAnAlbumQueryParams = field()
    security: EndpointGetAnAlbumSecurity = field()
    

@dataclass
class EndpointGetAnAlbumResponse:
    content_type: str = field()
    status_code: int = field()
    album_object: Optional[shared.AlbumObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
