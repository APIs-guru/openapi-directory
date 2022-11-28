from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlbumCustomThumbsPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlbumCustomThumbsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumCustomThumbsRequest:
    path_params: GetAlbumCustomThumbsPathParams = field()
    query_params: GetAlbumCustomThumbsQueryParams = field()
    

@dataclass
class GetAlbumCustomThumbsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    pictures: Optional[List[shared.Picture]] = field(default=None)
    
