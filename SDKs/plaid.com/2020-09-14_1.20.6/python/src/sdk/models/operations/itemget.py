from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemGetRequest:
    request: shared.ItemGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemGetResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    item_get_response: Optional[dict[str, Any]] = field(default=None)
    
