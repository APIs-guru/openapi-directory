from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorApexProcessorTokenCreateRequest:
    request: shared.ProcessorApexProcessorTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorApexProcessorTokenCreateResponse:
    content_type: str = field(default=None)
    processor_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
