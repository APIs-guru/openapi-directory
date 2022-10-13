from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagsReadRequest:
    path_params: TagsReadPathParams = field(default=None)
    

@dataclass
class TagsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_single: Optional[shared.TagSingle] = field(default=None)
    
