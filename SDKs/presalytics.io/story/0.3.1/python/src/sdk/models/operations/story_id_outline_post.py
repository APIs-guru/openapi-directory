from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDOutlinePostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDOutlinePostRequest:
    path_params: StoryIDOutlinePostPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDOutlinePostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
