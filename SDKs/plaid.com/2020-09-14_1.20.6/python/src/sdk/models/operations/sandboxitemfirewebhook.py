from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxItemFireWebhookRequest:
    request: shared.SandboxItemFireWebhookRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxItemFireWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_item_fire_webhook_response: Optional[dict[str, Any]] = field(default=None)
    
