from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LikeVideoPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeVideoSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeVideoRequest:
    path_params: LikeVideoPathParams = field(default=None)
    security: LikeVideoSecurity = field(default=None)
    

@dataclass
class LikeVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
