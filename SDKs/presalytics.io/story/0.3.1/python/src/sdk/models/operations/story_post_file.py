from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryPostFileQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryPostFileRequest:
    query_params: StoryPostFileQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class StoryPostFileResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
