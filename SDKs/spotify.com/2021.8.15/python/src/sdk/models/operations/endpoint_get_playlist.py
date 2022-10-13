from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetPlaylistQueryParams:
    additional_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetPlaylistRequest:
    path_params: EndpointGetPlaylistPathParams = field(default=None)
    query_params: EndpointGetPlaylistQueryParams = field(default=None)
    headers: EndpointGetPlaylistHeaders = field(default=None)
    security: EndpointGetPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointGetPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    playlist_object: Optional[shared.PlaylistObject] = field(default=None)
    status_code: int = field(default=None)
    
