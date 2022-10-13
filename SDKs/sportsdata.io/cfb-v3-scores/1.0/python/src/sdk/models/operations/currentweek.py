from dataclasses import dataclass, field
from typing import Enum,Optional

class CurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentWeekPathParams:
    format: CurrentWeekFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentWeekRequest:
    path_params: CurrentWeekPathParams = field(default=None)
    

@dataclass
class CurrentWeekResponse:
    content_type: str = field(default=None)
    current_week_200_application_json_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
