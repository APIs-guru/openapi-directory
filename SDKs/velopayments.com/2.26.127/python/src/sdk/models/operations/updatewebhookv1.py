from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateWebhookV1PathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookV1Request:
    path_params: UpdateWebhookV1PathParams = field()
    request: Optional[shared.UpdateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWebhookV1Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
