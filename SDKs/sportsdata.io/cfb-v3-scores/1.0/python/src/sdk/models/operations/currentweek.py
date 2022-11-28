from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class CurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentWeekPathParams:
    format: CurrentWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentWeekRequest:
    path_params: CurrentWeekPathParams = field()
    

@dataclass
class CurrentWeekResponse:
    content_type: str = field()
    status_code: int = field()
    current_week_200_application_json_integer: Optional[int] = field(default=None)
    
