from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserOwnsVideoAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserOwnsVideoAlt1Request:
    path_params: CheckIfUserOwnsVideoAlt1PathParams = field()
    

@dataclass
class CheckIfUserOwnsVideoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
