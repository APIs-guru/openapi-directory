from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LinkTokenCreateRequest:
    request: shared.LinkTokenCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LinkTokenCreateResponse:
    content_type: str = field()
    status_code: int = field()
    link_token_create_response: Optional[dict[str, Any]] = field(default=None)
    
