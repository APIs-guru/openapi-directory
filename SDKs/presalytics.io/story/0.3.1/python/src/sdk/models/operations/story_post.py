from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryPostQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryPostRequest:
    query_params: StoryPostQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryPostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
