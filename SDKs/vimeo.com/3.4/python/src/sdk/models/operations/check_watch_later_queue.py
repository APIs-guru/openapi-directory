from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckWatchLaterQueuePathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckWatchLaterQueueSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckWatchLaterQueueRequest:
    path_params: CheckWatchLaterQueuePathParams = field(default=None)
    security: CheckWatchLaterQueueSecurity = field(default=None)
    

@dataclass
class CheckWatchLaterQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
