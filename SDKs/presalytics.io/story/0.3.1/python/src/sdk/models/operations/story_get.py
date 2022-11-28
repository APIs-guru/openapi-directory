from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryGetQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    include_relationships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryGetRequest:
    query_params: StoryGetQueryParams = field()
    

@dataclass
class StoryGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    stories: Optional[List[shared.Story]] = field(default=None)
    
