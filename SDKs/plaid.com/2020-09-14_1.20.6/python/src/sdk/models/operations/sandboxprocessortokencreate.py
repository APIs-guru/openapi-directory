from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxProcessorTokenCreateRequest:
    request: shared.SandboxProcessorTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxProcessorTokenCreateResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_processor_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
