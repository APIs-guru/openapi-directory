from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckWatchLaterQueueAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckWatchLaterQueueAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckWatchLaterQueueAlt1Request:
    path_params: CheckWatchLaterQueueAlt1PathParams = field()
    security: CheckWatchLaterQueueAlt1Security = field()
    

@dataclass
class CheckWatchLaterQueueAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
