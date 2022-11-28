from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ScheduleFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SchedulePathParams:
    format: ScheduleFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = field()
    

@dataclass
class ScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
