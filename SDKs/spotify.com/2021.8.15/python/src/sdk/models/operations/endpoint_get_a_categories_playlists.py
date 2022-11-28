from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetACategoriesPlaylistsPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoriesPlaylistsQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetACategoriesPlaylistsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetACategoriesPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetACategoriesPlaylistsRequest:
    headers: EndpointGetACategoriesPlaylistsHeaders = field()
    path_params: EndpointGetACategoriesPlaylistsPathParams = field()
    query_params: EndpointGetACategoriesPlaylistsQueryParams = field()
    security: EndpointGetACategoriesPlaylistsSecurity = field()
    

@dataclass
class EndpointGetACategoriesPlaylistsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    playlist_paging_object: Optional[shared.PlaylistPagingObject] = field(default=None)
    
