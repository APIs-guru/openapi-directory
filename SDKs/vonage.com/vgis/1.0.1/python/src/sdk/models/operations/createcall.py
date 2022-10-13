from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateCallRequest:
    request: shared.CallCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCallResponse:
    calls: Optional[List[shared.Call]] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
