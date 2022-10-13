from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnlikeStoryPathParams:
    story_id: str = field(default=None, metadata={'path_param': { 'field_name': 'story_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeStoryQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class UnlikeStoryRequest:
    path_params: UnlikeStoryPathParams = field(default=None)
    query_params: UnlikeStoryQueryParams = field(default=None)
    

@dataclass
class UnlikeStoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
