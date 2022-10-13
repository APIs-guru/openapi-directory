from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShiftPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShiftSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShiftRequest:
    path_params: GetShiftPathParams = field(default=None)
    security: GetShiftSecurity = field(default=None)
    

@dataclass
class GetShiftResponse:
    content_type: str = field(default=None)
    get_shift_response: Optional[shared.GetShiftResponse] = field(default=None)
    status_code: int = field(default=None)
    
