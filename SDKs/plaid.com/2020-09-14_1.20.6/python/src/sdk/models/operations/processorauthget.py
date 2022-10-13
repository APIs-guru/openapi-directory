from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorAuthGetRequest:
    request: shared.ProcessorAuthGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorAuthGetResponse:
    content_type: str = field(default=None)
    processor_auth_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
