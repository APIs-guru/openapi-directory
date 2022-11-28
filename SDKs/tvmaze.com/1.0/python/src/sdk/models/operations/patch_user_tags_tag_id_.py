from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUserTagsTagIDPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserTagsTagIDRequest:
    path_params: PatchUserTagsTagIDPathParams = field()
    request: Optional[shared.TagInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchUserTagsTagIDResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
