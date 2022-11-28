from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksIDRequest:
    path_params: GetWebhooksIDPathParams = field()
    

@dataclass
class GetWebhooksIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_webhook_response: Optional[shared.GetWebhookResponse] = field(default=None)
    
