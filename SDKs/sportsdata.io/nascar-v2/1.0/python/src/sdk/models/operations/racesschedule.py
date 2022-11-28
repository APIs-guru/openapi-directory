from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class RacesScheduleFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RacesSchedulePathParams:
    format: RacesScheduleFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class RacesScheduleRequest:
    path_params: RacesSchedulePathParams = field()
    

@dataclass
class RacesScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    races: Optional[List[Any]] = field(default=None)
    
