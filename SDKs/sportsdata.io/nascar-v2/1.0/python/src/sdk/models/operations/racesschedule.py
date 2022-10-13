from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class RacesScheduleFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RacesSchedulePathParams:
    format: RacesScheduleFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class RacesScheduleRequest:
    path_params: RacesSchedulePathParams = field(default=None)
    

@dataclass
class RacesScheduleResponse:
    content_type: str = field(default=None)
    races: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
