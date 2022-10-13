from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateShiftPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateShiftSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateShiftRequest:
    path_params: UpdateShiftPathParams = field(default=None)
    request: shared.UpdateShiftRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateShiftSecurity = field(default=None)
    

@dataclass
class UpdateShiftResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_shift_response: Optional[shared.UpdateShiftResponse] = field(default=None)
    
