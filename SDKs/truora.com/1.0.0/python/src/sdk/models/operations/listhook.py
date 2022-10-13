from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListHookSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListHookRequest:
    security: ListHookSecurity = field(default=None)
    

@dataclass
class ListHookResponse:
    content_type: str = field(default=None)
    hook_output: Optional[shared.HookOutput] = field(default=None)
    status_code: int = field(default=None)
    
