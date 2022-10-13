from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicationGetRequest:
    request: shared.ApplicationGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ApplicationGetResponse:
    application_get_response: Optional[shared.ApplicationGetResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
