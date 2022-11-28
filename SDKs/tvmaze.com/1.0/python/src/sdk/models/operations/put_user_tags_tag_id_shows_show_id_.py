from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserTagsTagIDShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserTagsTagIDShowsShowIDRequest:
    path_params: PutUserTagsTagIDShowsShowIDPathParams = field()
    

@dataclass
class PutUserTagsTagIDShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    tag_instance: Optional[shared.TagInstance] = field(default=None)
    
