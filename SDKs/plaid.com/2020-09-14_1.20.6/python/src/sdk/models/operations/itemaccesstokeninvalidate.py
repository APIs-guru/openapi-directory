from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemAccessTokenInvalidateRequest:
    request: shared.ItemAccessTokenInvalidateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemAccessTokenInvalidateResponse:
    content_type: str = field()
    status_code: int = field()
    item_access_token_invalidate_response: Optional[dict[str, Any]] = field(default=None)
    
