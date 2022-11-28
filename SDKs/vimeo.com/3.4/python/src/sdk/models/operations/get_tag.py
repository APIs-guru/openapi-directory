from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagRequest:
    path_params: GetTagPathParams = field()
    

@dataclass
class GetTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
