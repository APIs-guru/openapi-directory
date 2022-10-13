from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDStatusGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDStatusGetRequest:
    path_params: StoryIDStatusGetPathParams = field(default=None)
    

@dataclass
class StoryIDStatusGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    status: Optional[Any] = field(default=None)
    
