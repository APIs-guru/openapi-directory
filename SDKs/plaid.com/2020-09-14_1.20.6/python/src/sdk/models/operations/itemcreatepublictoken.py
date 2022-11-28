from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemCreatePublicTokenRequest:
    request: shared.ItemPublicTokenCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemCreatePublicTokenResponse:
    content_type: str = field()
    status_code: int = field()
    item_public_token_create_response: Optional[dict[str, Any]] = field(default=None)
    
