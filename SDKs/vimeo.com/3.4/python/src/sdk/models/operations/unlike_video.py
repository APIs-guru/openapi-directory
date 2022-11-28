from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnlikeVideoPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeVideoSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlikeVideoRequest:
    path_params: UnlikeVideoPathParams = field()
    security: UnlikeVideoSecurity = field()
    

@dataclass
class UnlikeVideoResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
