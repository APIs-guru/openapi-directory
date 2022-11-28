from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserLikedVideoAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserLikedVideoAlt1Request:
    path_params: CheckIfUserLikedVideoAlt1PathParams = field()
    

@dataclass
class CheckIfUserLikedVideoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
