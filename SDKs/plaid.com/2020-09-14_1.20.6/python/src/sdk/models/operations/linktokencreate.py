from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LinkTokenCreateRequest:
    request: shared.LinkTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LinkTokenCreateResponse:
    content_type: str = field(default=None)
    link_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
