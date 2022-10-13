from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxPublicTokenCreateRequest:
    request: shared.SandboxPublicTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxPublicTokenCreateResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_public_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
