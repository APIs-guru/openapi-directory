from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDAnalyticsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDAnalyticsRequest:
    path_params: StoryIDAnalyticsPathParams = field()
    

@dataclass
class StoryIDAnalyticsResponse:
    content_type: str = field()
    status_code: int = field()
    login_button: Optional[str] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation_with_analytics_data: Optional[str] = field(default=None)
    
