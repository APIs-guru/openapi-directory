from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstitutionsSearchRequest:
    request: shared.InstitutionsSearchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstitutionsSearchResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    institutions_search_response: Optional[dict[str, Any]] = field(default=None)
    
