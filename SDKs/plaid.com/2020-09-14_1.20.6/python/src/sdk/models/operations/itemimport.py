from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemImportRequest:
    request: shared.ItemImportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemImportResponse:
    content_type: str = field(default=None)
    item_import_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
