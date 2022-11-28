from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserTagsResponse:
    content_type: str = field()
    status_code: int = field()
    tags: Optional[List[shared.Tag]] = field(default=None)
    
