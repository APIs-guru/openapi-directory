from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhookVerificationKeyGetRequest:
    request: shared.WebhookVerificationKeyGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebhookVerificationKeyGetResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_verification_key_get_response: Optional[dict[str, Any]] = field(default=None)
    
