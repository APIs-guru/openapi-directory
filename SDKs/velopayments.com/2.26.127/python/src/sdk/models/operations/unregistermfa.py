from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UnregisterMfaPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnregisterMfaRequest:
    path_params: UnregisterMfaPathParams = field()
    request: shared.UnregisterMfaRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnregisterMfaResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
