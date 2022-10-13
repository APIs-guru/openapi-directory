from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthLoginRequest:
    request: shared.LoginDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthLoginResponse:
    auth_login_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
