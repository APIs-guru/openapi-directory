from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUserTagsTagIDPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserTagsTagIDRequest:
    path_params: PatchUserTagsTagIDPathParams = field(default=None)
    request: Optional[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchUserTagsTagIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
