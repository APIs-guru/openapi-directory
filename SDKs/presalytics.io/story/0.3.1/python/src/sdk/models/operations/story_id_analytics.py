from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDAnalyticsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDAnalyticsRequest:
    path_params: StoryIDAnalyticsPathParams = field(default=None)
    

@dataclass
class StoryIDAnalyticsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    reveal_js_presenation_with_analytics_data: Optional[str] = field(default=None)
    
