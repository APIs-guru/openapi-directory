from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDDeleteRequest:
    path_params: StoryIDDeletePathParams = field()
    

@dataclass
class StoryIDDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
