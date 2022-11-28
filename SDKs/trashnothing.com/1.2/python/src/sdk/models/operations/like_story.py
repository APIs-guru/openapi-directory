from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LikeStoryPathParams:
    story_id: str = field(metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeStoryQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class LikeStoryRequest:
    path_params: LikeStoryPathParams = field()
    query_params: LikeStoryQueryParams = field()
    

@dataclass
class LikeStoryResponse:
    content_type: str = field()
    status_code: int = field()
    story: Optional[shared.Story] = field(default=None)
    
