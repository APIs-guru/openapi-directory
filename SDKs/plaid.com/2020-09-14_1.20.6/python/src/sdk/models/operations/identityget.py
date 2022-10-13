from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IdentityGetRequest:
    request: shared.IdentityGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IdentityGetResponse:
    content_type: str = field(default=None)
    identity_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
