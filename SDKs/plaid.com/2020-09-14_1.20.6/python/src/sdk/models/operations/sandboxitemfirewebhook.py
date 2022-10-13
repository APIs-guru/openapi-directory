from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxItemFireWebhookRequest:
    request: shared.SandboxItemFireWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxItemFireWebhookResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_item_fire_webhook_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
