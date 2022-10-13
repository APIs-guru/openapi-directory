from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoThumbnailsAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoThumbnailsAlt1QueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoThumbnailsAlt1Request:
    path_params: GetVideoThumbnailsAlt1PathParams = field(default=None)
    query_params: GetVideoThumbnailsAlt1QueryParams = field(default=None)
    

@dataclass
class GetVideoThumbnailsAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pictures: Optional[List[shared.Picture]] = field(default=None)
    
