from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResendTokenPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResendTokenRequest:
    path_params: ResendTokenPathParams = field()
    request: shared.ResendTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResendTokenResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
