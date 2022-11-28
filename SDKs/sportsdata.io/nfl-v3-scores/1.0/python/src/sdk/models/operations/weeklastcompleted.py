from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class WeekLastCompletedFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class WeekLastCompletedPathParams:
    format: WeekLastCompletedFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekLastCompletedRequest:
    path_params: WeekLastCompletedPathParams = field()
    

@dataclass
class WeekLastCompletedResponse:
    content_type: str = field()
    status_code: int = field()
    week_last_completed_200_application_json_integer: Optional[int] = field(default=None)
    
