from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDPutQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryIDPutRequest:
    path_params: StoryIDPutPathParams = field(default=None)
    query_params: StoryIDPutQueryParams = field(default=None)
    request: shared.Story = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
