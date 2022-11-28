from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemApplicationListRequest:
    request: shared.ItemApplicationListRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemApplicationListResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    item_application_list_response: Optional[shared.ItemApplicationListResponse] = field(default=None)
    
