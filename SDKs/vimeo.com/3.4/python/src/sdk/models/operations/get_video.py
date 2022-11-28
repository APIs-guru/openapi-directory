from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoRequest:
    path_params: GetVideoPathParams = field()
    

@dataclass
class GetVideoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
