from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhookByIDPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhookByIDRequest:
    path_params: GetWebhookByIDPathParams = field(default=None)
    

@dataclass
class GetWebhookByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_webhook_by_id_200_application_json_string: Optional[str] = field(default=None)
    get_webhook_by_id_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
