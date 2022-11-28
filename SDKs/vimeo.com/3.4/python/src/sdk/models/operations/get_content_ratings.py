from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetContentRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    content_ratings: Optional[List[shared.ContentRating]] = field(default=None)
    
