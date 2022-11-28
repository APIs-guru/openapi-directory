from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LeaveGroupAlt1PathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveGroupAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LeaveGroupAlt1Request:
    path_params: LeaveGroupAlt1PathParams = field()
    security: LeaveGroupAlt1Security = field()
    

@dataclass
class LeaveGroupAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
