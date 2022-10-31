from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetACategoriesPlaylistsPathParams:
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoriesPlaylistsQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetACategoriesPlaylistsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoriesPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetACategoriesPlaylistsRequest:
    path_params: EndpointGetACategoriesPlaylistsPathParams = field(default=None)
    query_params: EndpointGetACategoriesPlaylistsQueryParams = field(default=None)
    headers: EndpointGetACategoriesPlaylistsHeaders = field(default=None)
    security: EndpointGetACategoriesPlaylistsSecurity = field(default=None)
    

@dataclass
class EndpointGetACategoriesPlaylistsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    playlist_paging_object: Optional[shared.PlaylistPagingObject] = field(default=None)
    status_code: int = field(default=None)
    
