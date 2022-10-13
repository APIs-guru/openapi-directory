from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteShiftPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteShiftSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteShiftRequest:
    path_params: DeleteShiftPathParams = field(default=None)
    security: DeleteShiftSecurity = field(default=None)
    

@dataclass
class DeleteShiftResponse:
    content_type: str = field(default=None)
    delete_shift_response: Optional[shared.DeleteShiftResponse] = field(default=None)
    status_code: int = field(default=None)
    
