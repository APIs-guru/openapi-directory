from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoTagsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoTagsRequest:
    path_params: GetVideoTagsPathParams = field()
    

@dataclass
class GetVideoTagsResponse:
    content_type: str = field()
    status_code: int = field()
    tags: Optional[List[shared.Tag]] = field(default=None)
    
