from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBreakTypePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBreakTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBreakTypeRequest:
    path_params: GetBreakTypePathParams = field(default=None)
    security: GetBreakTypeSecurity = field(default=None)
    

@dataclass
class GetBreakTypeResponse:
    content_type: str = field(default=None)
    get_break_type_response: Optional[shared.GetBreakTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
