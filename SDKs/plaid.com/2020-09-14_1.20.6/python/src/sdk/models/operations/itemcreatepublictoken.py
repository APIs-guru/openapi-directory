from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemCreatePublicTokenRequest:
    request: shared.ItemPublicTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemCreatePublicTokenResponse:
    content_type: str = field(default=None)
    item_public_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
