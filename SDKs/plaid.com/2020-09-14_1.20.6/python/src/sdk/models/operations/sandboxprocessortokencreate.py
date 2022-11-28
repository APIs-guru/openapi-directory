from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxProcessorTokenCreateRequest:
    request: shared.SandboxProcessorTokenCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxProcessorTokenCreateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_processor_token_create_response: Optional[dict[str, Any]] = field(default=None)
    
