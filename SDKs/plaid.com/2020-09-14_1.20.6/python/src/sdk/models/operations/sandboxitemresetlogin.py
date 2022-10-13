from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxItemResetLoginRequest:
    request: shared.SandboxItemResetLoginRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxItemResetLoginResponse:
    content_type: str = field(default=None)
    sandbox_item_reset_login_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
