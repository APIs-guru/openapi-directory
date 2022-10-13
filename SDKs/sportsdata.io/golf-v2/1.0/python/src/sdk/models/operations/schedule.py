from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ScheduleFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SchedulePathParams:
    format: ScheduleFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = field(default=None)
    

@dataclass
class ScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tournaments: Optional[List[Any]] = field(default=None)
    
