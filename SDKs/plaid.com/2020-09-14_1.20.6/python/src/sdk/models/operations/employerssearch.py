from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmployersSearchRequest:
    request: shared.EmployersSearchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EmployersSearchResponse:
    content_type: str = field(default=None)
    employers_search_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
