from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LikeVideoAlt1PathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeVideoAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeVideoAlt1Request:
    path_params: LikeVideoAlt1PathParams = field(default=None)
    security: LikeVideoAlt1Security = field(default=None)
    

@dataclass
class LikeVideoAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
