from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WeekUpcomingPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekUpcomingRequest:
    path_params: WeekUpcomingPathParams = field()
    

@dataclass
class WeekUpcomingResponse:
    content_type: str = field()
    status_code: int = field()
    week_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    
