from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckCategoryForVideoPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckCategoryForVideoRequest:
    path_params: CheckCategoryForVideoPathParams = field()
    

@dataclass
class CheckCategoryForVideoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
