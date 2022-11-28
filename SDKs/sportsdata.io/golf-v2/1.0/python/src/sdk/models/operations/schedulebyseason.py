from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ScheduleBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScheduleBySeasonPathParams:
    format: ScheduleBySeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleBySeasonRequest:
    path_params: ScheduleBySeasonPathParams = field()
    

@dataclass
class ScheduleBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    tournaments: Optional[List[Any]] = field(default=None)
    
