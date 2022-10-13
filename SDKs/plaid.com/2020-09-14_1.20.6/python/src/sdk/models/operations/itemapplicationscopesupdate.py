from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemApplicationScopesUpdateRequest:
    request: shared.ItemApplicationScopesUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemApplicationScopesUpdateResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    item_application_scopes_update_response: Optional[shared.ItemApplicationScopesUpdateResponse] = field(default=None)
    status_code: int = field(default=None)
    
