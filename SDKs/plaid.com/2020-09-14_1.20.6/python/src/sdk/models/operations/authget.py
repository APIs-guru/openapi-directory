from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AuthGetRequest:
    request: shared.AuthGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthGetResponse:
    content_type: str = field()
    status_code: int = field()
    auth_get_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
