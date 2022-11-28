from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UnregisterMfaForSelfHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnregisterMfaForSelfRequest:
    headers: UnregisterMfaForSelfHeaders = field()
    request: shared.SelfMfaTypeUnregisterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnregisterMfaForSelfResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
