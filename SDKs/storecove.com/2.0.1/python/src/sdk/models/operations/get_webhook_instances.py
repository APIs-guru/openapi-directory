from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWebhookInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_instance: Optional[Any] = field(default=None)
    
