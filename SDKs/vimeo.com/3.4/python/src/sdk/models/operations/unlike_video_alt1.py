from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnlikeVideoAlt1PathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeVideoAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlikeVideoAlt1Request:
    path_params: UnlikeVideoAlt1PathParams = field(default=None)
    security: UnlikeVideoAlt1Security = field(default=None)
    

@dataclass
class UnlikeVideoAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
