from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LiabilitiesGetRequest:
    request: shared.LiabilitiesGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LiabilitiesGetResponse:
    content_type: str = field(default=None)
    liabilities_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
