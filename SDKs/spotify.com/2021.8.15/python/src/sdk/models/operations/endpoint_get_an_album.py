from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnAlbumPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnAlbumQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnAlbumHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnAlbumSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnAlbumRequest:
    path_params: EndpointGetAnAlbumPathParams = field(default=None)
    query_params: EndpointGetAnAlbumQueryParams = field(default=None)
    headers: EndpointGetAnAlbumHeaders = field(default=None)
    security: EndpointGetAnAlbumSecurity = field(default=None)
    

@dataclass
class EndpointGetAnAlbumResponse:
    album_object: Optional[shared.AlbumObject] = field(default=None)
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
