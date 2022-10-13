from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWebhookInstancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_instance: Optional[Any] = field(default=None)
    
