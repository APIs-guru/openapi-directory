from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LiabilitiesGetRequest:
    request: shared.LiabilitiesGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LiabilitiesGetResponse:
    content_type: str = field()
    status_code: int = field()
    liabilities_get_response: Optional[dict[str, Any]] = field(default=None)
    
