from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JoinGroupAlt1PathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinGroupAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinGroupAlt1Request:
    path_params: JoinGroupAlt1PathParams = field()
    security: JoinGroupAlt1Security = field()
    

@dataclass
class JoinGroupAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
