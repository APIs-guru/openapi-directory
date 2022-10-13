from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemWebhookUpdateRequest:
    request: shared.ItemWebhookUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemWebhookUpdateResponse:
    content_type: str = field(default=None)
    item_webhook_update_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
