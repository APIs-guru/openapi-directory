from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResetPasswordRequest:
    request: shared.ResetPasswordRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    
