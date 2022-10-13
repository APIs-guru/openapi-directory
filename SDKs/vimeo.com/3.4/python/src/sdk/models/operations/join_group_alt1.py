from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JoinGroupAlt1PathParams:
    group_id: float = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinGroupAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinGroupAlt1Request:
    path_params: JoinGroupAlt1PathParams = field(default=None)
    security: JoinGroupAlt1Security = field(default=None)
    

@dataclass
class JoinGroupAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
