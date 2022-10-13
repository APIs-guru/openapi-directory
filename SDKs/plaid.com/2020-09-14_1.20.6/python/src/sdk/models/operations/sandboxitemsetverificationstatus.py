from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxItemSetVerificationStatusRequest:
    request: shared.SandboxItemSetVerificationStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxItemSetVerificationStatusResponse:
    content_type: str = field(default=None)
    sandbox_item_set_verification_status_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
