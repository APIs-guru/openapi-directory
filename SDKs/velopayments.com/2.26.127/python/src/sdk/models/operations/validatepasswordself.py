from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ValidatePasswordSelfRequest:
    request: shared.PasswordRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePasswordSelfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validate_password_response: Optional[shared.ValidatePasswordResponse] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
