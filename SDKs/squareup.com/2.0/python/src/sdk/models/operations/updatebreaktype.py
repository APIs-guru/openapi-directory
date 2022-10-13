from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateBreakTypePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBreakTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateBreakTypeRequest:
    path_params: UpdateBreakTypePathParams = field(default=None)
    request: shared.UpdateBreakTypeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBreakTypeSecurity = field(default=None)
    

@dataclass
class UpdateBreakTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_break_type_response: Optional[shared.UpdateBreakTypeResponse] = field(default=None)
    
