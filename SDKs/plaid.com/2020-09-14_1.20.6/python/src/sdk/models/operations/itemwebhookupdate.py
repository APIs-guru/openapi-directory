from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemWebhookUpdateRequest:
    request: shared.ItemWebhookUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemWebhookUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    item_webhook_update_response: Optional[dict[str, Any]] = field(default=None)
    
