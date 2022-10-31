from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ValidateAccessTokenHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValidateAccessTokenRequest:
    headers: ValidateAccessTokenHeaders = field(default=None)
    request: shared.AccessTokenValidationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidateAccessTokenResponse:
    access_token_response: Optional[shared.AccessTokenResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
