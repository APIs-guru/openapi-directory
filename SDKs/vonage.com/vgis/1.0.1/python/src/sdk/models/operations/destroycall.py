from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DestroyCallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DestroyCallRequest:
    path_params: DestroyCallPathParams = field()
    

@dataclass
class DestroyCallResponse:
    content_type: str = field()
    status_code: int = field()
    calls: Optional[List[shared.Call]] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
