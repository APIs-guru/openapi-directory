from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorIdentityGetRequest:
    request: shared.ProcessorIdentityGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorIdentityGetResponse:
    content_type: str = field(default=None)
    processor_identity_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
