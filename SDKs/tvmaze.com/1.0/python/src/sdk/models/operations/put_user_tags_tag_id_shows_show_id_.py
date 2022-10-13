from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserTagsTagIDShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserTagsTagIDShowsShowIDRequest:
    path_params: PutUserTagsTagIDShowsShowIDPathParams = field(default=None)
    

@dataclass
class PutUserTagsTagIDShowsShowIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_instance: Optional[shared.TagInstance] = field(default=None)
    
