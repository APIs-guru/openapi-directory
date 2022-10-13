from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateHookPathParams:
    hook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateHookSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateHookRequest:
    path_params: UpdateHookPathParams = field(default=None)
    request: shared.CreateHookInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateHookSecurity = field(default=None)
    

@dataclass
class UpdateHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
