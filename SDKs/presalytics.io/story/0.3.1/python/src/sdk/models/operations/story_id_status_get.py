from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDStatusGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDStatusGetRequest:
    path_params: StoryIDStatusGetPathParams = field()
    

@dataclass
class StoryIDStatusGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    status: Optional[Any] = field(default=None)
    
