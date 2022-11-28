from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserTagsRequest:
    request: Optional[shared.TagInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUserTagsResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
