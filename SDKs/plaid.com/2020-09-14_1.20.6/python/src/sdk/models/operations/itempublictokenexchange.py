from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemPublicTokenExchangeRequest:
    request: shared.ItemPublicTokenExchangeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemPublicTokenExchangeResponse:
    content_type: str = field(default=None)
    item_public_token_exchange_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
