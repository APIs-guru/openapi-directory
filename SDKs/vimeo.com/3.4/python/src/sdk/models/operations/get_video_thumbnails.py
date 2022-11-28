from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoThumbnailsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoThumbnailsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoThumbnailsRequest:
    path_params: GetVideoThumbnailsPathParams = field()
    query_params: GetVideoThumbnailsQueryParams = field()
    

@dataclass
class GetVideoThumbnailsResponse:
    content_type: str = field()
    status_code: int = field()
    pictures: Optional[List[shared.Picture]] = field(default=None)
    
