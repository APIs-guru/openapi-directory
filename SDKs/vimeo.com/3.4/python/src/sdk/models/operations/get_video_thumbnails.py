from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoThumbnailsPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoThumbnailsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoThumbnailsRequest:
    path_params: GetVideoThumbnailsPathParams = field(default=None)
    query_params: GetVideoThumbnailsQueryParams = field(default=None)
    

@dataclass
class GetVideoThumbnailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pictures: Optional[List[shared.Picture]] = field(default=None)
    
