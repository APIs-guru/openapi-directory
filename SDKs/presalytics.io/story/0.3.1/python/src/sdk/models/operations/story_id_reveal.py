from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDRevealPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDRevealRequest:
    path_params: StoryIDRevealPathParams = field()
    

@dataclass
class StoryIDRevealResponse:
    content_type: str = field()
    status_code: int = field()
    login_button: Optional[str] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation: Optional[str] = field(default=None)
    
