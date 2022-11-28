from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthTokenRequest:
    request: Optional[shared.TokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    token_response: Optional[shared.TokenResponse] = field(default=None)
    
