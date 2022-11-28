from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDPutQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryIDPutRequest:
    path_params: StoryIDPutPathParams = field()
    query_params: StoryIDPutQueryParams = field()
    request: shared.Story = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDPutResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
