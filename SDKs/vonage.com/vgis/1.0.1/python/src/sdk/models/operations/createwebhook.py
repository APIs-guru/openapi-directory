from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateWebhookRequest:
    request: shared.WebhookCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
