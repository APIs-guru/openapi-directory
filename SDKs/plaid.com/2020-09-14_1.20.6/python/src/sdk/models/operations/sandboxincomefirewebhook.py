from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxIncomeFireWebhookRequest:
    request: shared.SandboxIncomeFireWebhookRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxIncomeFireWebhookResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_income_fire_webhook_response: Optional[shared.SandboxIncomeFireWebhookResponse] = field(default=None)
    status_code: int = field(default=None)
    
