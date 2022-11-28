from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemApplicationScopesUpdateRequest:
    request: shared.ItemApplicationScopesUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ItemApplicationScopesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    item_application_scopes_update_response: Optional[shared.ItemApplicationScopesUpdateResponse] = field(default=None)
    
