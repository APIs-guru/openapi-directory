from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemRemoveRequest:
    request: shared.ItemRemoveRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    item_remove_response: Optional[dict[str, Any]] = field(default=None)
    
