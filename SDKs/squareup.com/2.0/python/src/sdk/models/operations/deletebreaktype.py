from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteBreakTypePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBreakTypeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteBreakTypeRequest:
    path_params: DeleteBreakTypePathParams = field(default=None)
    security: DeleteBreakTypeSecurity = field(default=None)
    

@dataclass
class DeleteBreakTypeResponse:
    content_type: str = field(default=None)
    delete_break_type_response: Optional[shared.DeleteBreakTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
