from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstitutionsGetRequest:
    request: shared.InstitutionsGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstitutionsGetResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    institutions_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
