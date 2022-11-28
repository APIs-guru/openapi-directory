from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class SchedulesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SchedulesPathParams:
    format: SchedulesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class SchedulesRequest:
    path_params: SchedulesPathParams = field()
    

@dataclass
class SchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
