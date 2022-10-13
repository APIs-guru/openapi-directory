from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDDeleteRequest:
    path_params: StoryIDDeletePathParams = field(default=None)
    

@dataclass
class StoryIDDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
