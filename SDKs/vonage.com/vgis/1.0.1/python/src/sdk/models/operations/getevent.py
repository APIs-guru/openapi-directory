from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field(default=None)
    

@dataclass
class GetEventResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    status_code: int = field(default=None)
    
