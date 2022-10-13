from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DestroyCallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DestroyCallRequest:
    path_params: DestroyCallPathParams = field(default=None)
    

@dataclass
class DestroyCallResponse:
    calls: Optional[List[shared.Call]] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
