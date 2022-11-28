from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserOwnsVideoPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserOwnsVideoRequest:
    path_params: CheckIfUserOwnsVideoPathParams = field()
    

@dataclass
class CheckIfUserOwnsVideoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
