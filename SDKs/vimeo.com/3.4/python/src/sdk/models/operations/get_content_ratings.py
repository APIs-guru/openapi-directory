from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetContentRatingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    content_ratings: Optional[List[shared.ContentRating]] = field(default=None)
    
