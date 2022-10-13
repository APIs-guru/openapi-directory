from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryIDSessionsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDSessionsGetQueryParams:
    include_relationships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryIDSessionsGetRequest:
    path_params: StoryIDSessionsGetPathParams = field(default=None)
    query_params: StoryIDSessionsGetQueryParams = field(default=None)
    

@dataclass
class StoryIDSessionsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    sessions: Optional[List[shared.Session]] = field(default=None)
    
