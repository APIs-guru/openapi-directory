from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListHookSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListHookRequest:
    security: ListHookSecurity = field()
    

@dataclass
class ListHookResponse:
    content_type: str = field()
    status_code: int = field()
    hook_output: Optional[shared.HookOutput] = field(default=None)
    
