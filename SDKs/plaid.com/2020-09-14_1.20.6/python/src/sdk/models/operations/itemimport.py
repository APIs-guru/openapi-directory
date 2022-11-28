from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemImportRequest:
    request: shared.ItemImportRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemImportResponse:
    content_type: str = field()
    status_code: int = field()
    item_import_response: Optional[dict[str, Any]] = field(default=None)
    
