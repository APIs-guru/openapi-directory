from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthLoginRequest:
    request: shared.LoginDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthLoginResponse:
    content_type: str = field()
    status_code: int = field()
    auth_login_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
