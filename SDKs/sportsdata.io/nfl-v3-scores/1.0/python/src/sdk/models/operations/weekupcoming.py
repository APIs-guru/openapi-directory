from dataclasses import dataclass, field
from typing import Enum,Optional

class WeekUpcomingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class WeekUpcomingPathParams:
    format: WeekUpcomingFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekUpcomingRequest:
    path_params: WeekUpcomingPathParams = field(default=None)
    

@dataclass
class WeekUpcomingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    week_upcoming_200_application_json_integer: Optional[int] = field(default=None)
    
