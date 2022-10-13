from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhookVerificationKeyGetRequest:
    request: shared.WebhookVerificationKeyGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebhookVerificationKeyGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_verification_key_get_response: Optional[dict[str, Any]] = field(default=None)
    
