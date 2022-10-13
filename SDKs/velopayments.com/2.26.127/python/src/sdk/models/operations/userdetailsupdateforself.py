from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UserDetailsUpdateForSelfRequest:
    request: shared.PayeeUserSelfUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UserDetailsUpdateForSelfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
