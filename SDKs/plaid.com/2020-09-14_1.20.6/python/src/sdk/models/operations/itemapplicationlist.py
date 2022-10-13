from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ItemApplicationListRequest:
    request: shared.ItemApplicationListRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemApplicationListResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    item_application_list_response: Optional[shared.ItemApplicationListResponse] = field(default=None)
    status_code: int = field(default=None)
    
