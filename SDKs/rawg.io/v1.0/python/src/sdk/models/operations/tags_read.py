from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagsReadRequest:
    path_params: TagsReadPathParams = field()
    

@dataclass
class TagsReadResponse:
    content_type: str = field()
    status_code: int = field()
    tag_single: Optional[shared.TagSingle] = field(default=None)
    
