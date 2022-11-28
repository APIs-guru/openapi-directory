from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstitutionsGetRequest:
    request: shared.InstitutionsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstitutionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    institutions_get_response: Optional[dict[str, Any]] = field(default=None)
    
