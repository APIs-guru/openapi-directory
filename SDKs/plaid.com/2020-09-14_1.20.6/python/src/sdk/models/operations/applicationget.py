from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicationGetRequest:
    request: shared.ApplicationGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ApplicationGetResponse:
    content_type: str = field()
    status_code: int = field()
    application_get_response: Optional[shared.ApplicationGetResponse] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
