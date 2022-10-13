from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoTagsPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoTagsRequest:
    path_params: GetVideoTagsPathParams = field(default=None)
    

@dataclass
class GetVideoTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
