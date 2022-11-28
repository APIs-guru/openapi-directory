from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    webhooks: Optional[List[shared.Webhook]] = field(default=None)
    
