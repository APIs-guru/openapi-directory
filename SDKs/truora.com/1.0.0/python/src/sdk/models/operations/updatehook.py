from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateHookPathParams:
    hook_id: str = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHookSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateHookRequest:
    path_params: UpdateHookPathParams = field()
    request: shared.CreateHookInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateHookSecurity = field()
    

@dataclass
class UpdateHookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    
