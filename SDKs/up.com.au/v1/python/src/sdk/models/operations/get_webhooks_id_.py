from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksIDRequest:
    path_params: GetWebhooksIDPathParams = field(default=None)
    

@dataclass
class GetWebhooksIDResponse:
    content_type: str = field(default=None)
    get_webhook_response: Optional[shared.GetWebhookResponse] = field(default=None)
    status_code: int = field(default=None)
    
