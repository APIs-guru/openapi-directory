from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorApexProcessorTokenCreateRequest:
    request: shared.ProcessorApexProcessorTokenCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorApexProcessorTokenCreateResponse:
    content_type: str = field()
    status_code: int = field()
    processor_token_create_response: Optional[dict[str, Any]] = field(default=None)
    
