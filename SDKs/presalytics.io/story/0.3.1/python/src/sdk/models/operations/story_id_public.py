from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDPublicPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDPublicRequest:
    path_params: StoryIDPublicPathParams = field(default=None)
    

@dataclass
class StoryIDPublicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation: Optional[str] = field(default=None)
    
