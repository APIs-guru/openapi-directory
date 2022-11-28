from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WeekLastCompletedPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekLastCompletedRequest:
    path_params: WeekLastCompletedPathParams = field()
    

@dataclass
class WeekLastCompletedResponse:
    content_type: str = field()
    status_code: int = field()
    week_last_completed_200_application_json_integer: Optional[int] = field(default=None)
    
