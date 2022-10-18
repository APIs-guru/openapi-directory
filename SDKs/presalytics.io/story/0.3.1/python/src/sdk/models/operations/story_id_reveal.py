from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDRevealPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDRevealRequest:
    path_params: StoryIDRevealPathParams = field(default=None)
    

@dataclass
class StoryIDRevealResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation: Optional[str] = field(default=None)
    
