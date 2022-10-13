from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDFilePostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDFilePostQueryParams:
    include_outline: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    obsolete_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'obsolete_id', 'style': 'form', 'explode': True }})
    replace_existing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'replace_existing', 'style': 'form', 'explode': True }})
    

@dataclass
class StoryIDFilePostRequest:
    path_params: StoryIDFilePostPathParams = field(default=None)
    query_params: StoryIDFilePostQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class StoryIDFilePostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
