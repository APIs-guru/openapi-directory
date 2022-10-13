from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LinkTokenGetRequest:
    request: shared.LinkTokenGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LinkTokenGetResponse:
    content_type: str = field(default=None)
    link_token_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
