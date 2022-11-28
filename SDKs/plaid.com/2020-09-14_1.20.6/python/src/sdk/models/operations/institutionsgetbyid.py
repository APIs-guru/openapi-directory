from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstitutionsGetByIDRequest:
    request: shared.InstitutionsGetByIDRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstitutionsGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    institutions_get_by_id_response: Optional[dict[str, Any]] = field(default=None)
    
