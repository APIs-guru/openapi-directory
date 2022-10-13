from dataclasses import dataclass, field
from typing import Enum,Optional

class WeekCurrentFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class WeekCurrentPathParams:
    format: WeekCurrentFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class WeekCurrentRequest:
    path_params: WeekCurrentPathParams = field(default=None)
    

@dataclass
class WeekCurrentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    week_current_200_application_json_integer: Optional[int] = field(default=None)
    
