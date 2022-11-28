from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateCallRequest:
    request: shared.CallCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCallResponse:
    content_type: str = field()
    status_code: int = field()
    calls: Optional[List[shared.Call]] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
