from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ScheduleBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ScheduleBySeasonPathParams:
    format: ScheduleBySeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScheduleBySeasonRequest:
    path_params: ScheduleBySeasonPathParams = field(default=None)
    

@dataclass
class ScheduleBySeasonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tournaments: Optional[List[Any]] = field(default=None)
    
