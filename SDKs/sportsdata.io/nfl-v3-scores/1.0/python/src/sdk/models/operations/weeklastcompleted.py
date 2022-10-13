from dataclasses import dataclass, field
from typing import Enum,Optional

class WeekLastCompletedFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class WeekLastCompletedPathParams:
    format: WeekLastCompletedFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekLastCompletedRequest:
    path_params: WeekLastCompletedPathParams = field(default=None)
    

@dataclass
class WeekLastCompletedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    week_last_completed_200_application_json_integer: Optional[int] = field(default=None)
    
