from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IdentityGetRequest:
    request: shared.IdentityGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IdentityGetResponse:
    content_type: str = field()
    status_code: int = field()
    identity_get_response: Optional[dict[str, Any]] = field(default=None)
    
