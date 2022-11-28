from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodVideoPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodVideoRequest:
    path_params: GetVodVideoPathParams = field()
    

@dataclass
class GetVodVideoResponse:
    content_type: str = field()
    status_code: int = field()
    video: Optional[shared.Video] = field(default=None)
    
