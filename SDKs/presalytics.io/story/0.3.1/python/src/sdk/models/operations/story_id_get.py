from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDGetQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    include_relationships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    refresh_cache: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refresh_cache', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryIDGetRequest:
    path_params: StoryIDGetPathParams = field(default=None)
    query_params: StoryIDGetQueryParams = field(default=None)
    

@dataclass
class StoryIDGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
