from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstitutionsGetByIDRequest:
    request: shared.InstitutionsGetByIDRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstitutionsGetByIDResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    institutions_get_by_id_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
