from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxBankTransferFireWebhookRequest:
    request: shared.SandboxBankTransferFireWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxBankTransferFireWebhookResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_bank_transfer_fire_webhook_response: Optional[shared.SandboxBankTransferFireWebhookResponse] = field(default=None)
    status_code: int = field(default=None)
    
