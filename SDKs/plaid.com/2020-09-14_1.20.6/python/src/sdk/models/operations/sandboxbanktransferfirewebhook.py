from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxBankTransferFireWebhookRequest:
    request: shared.SandboxBankTransferFireWebhookRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxBankTransferFireWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_bank_transfer_fire_webhook_response: Optional[shared.SandboxBankTransferFireWebhookResponse] = field(default=None)
    
