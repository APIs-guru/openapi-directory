from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateHookSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateHookRequest:
    request: shared.CreateHookInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHookSecurity = field(default=None)
    

@dataclass
class CreateHookResponse:
    content_type: str = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    status_code: int = field(default=None)
    
