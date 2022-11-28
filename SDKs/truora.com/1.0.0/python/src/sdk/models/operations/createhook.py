from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateHookSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateHookRequest:
    request: shared.CreateHookInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateHookSecurity = field()
    

@dataclass
class CreateHookResponse:
    content_type: str = field()
    status_code: int = field()
    hook: Optional[shared.Hook] = field(default=None)
    
