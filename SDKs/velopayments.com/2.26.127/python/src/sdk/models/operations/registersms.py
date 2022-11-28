from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RegisterSmsRequest:
    request: shared.RegisterSmsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterSmsResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
