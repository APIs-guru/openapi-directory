from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDPublicPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDPublicRequest:
    path_params: StoryIDPublicPathParams = field()
    

@dataclass
class StoryIDPublicResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation: Optional[str] = field(default=None)
    
