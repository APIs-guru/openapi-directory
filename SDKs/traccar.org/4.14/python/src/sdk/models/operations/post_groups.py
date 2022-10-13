from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGroupsRequest:
    request: shared.Group = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGroupsResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
