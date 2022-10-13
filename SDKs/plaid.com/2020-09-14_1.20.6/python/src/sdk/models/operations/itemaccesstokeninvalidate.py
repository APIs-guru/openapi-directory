from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemAccessTokenInvalidateRequest:
    request: shared.ItemAccessTokenInvalidateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemAccessTokenInvalidateResponse:
    content_type: str = field(default=None)
    item_access_token_invalidate_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
