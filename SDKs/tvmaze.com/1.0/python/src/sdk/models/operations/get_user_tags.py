from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
