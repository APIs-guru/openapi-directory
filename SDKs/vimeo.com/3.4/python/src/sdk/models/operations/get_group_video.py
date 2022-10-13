from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupVideoPathParams:
    group_id: float = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupVideoRequest:
    path_params: GetGroupVideoPathParams = field(default=None)
    

@dataclass
class GetGroupVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
