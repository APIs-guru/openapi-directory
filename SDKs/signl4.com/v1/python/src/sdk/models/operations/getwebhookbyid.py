from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhookByIDPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhookByIDRequest:
    path_params: GetWebhookByIDPathParams = field()
    

@dataclass
class GetWebhookByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_webhook_by_id_200_application_json_string: Optional[str] = field(default=None)
    get_webhook_by_id_200_text_json_string: Optional[str] = field(default=None)
    get_webhook_by_id_200_text_plain_string: Optional[str] = field(default=None)
    
