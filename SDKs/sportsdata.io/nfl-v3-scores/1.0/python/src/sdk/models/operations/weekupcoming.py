from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class WeekUpcomingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class WeekUpcomingPathParams:
    format: WeekUpcomingFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekUpcomingRequest:
    path_params: WeekUpcomingPathParams = field()
    

@dataclass
class WeekUpcomingResponse:
    content_type: str = field()
    status_code: int = field()
    week_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    
