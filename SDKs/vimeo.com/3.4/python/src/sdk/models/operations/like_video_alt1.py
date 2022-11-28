from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LikeVideoAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeVideoAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeVideoAlt1Request:
    path_params: LikeVideoAlt1PathParams = field()
    security: LikeVideoAlt1Security = field()
    

@dataclass
class LikeVideoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
