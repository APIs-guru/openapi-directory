from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserTagsRequest:
    request: Optional[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUserTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
