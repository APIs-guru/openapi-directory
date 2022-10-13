from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostAPI10CalculateRequest:
    request: Optional[List[shared.Itinerary]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAPI10CalculateResponse:
    calculate_results: Optional[List[shared.CalculateResult]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
