from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorAuthGetRequest:
    request: shared.ProcessorAuthGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorAuthGetResponse:
    content_type: str = field()
    status_code: int = field()
    processor_auth_get_response: Optional[dict[str, Any]] = field(default=None)
    
