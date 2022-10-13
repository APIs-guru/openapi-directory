from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class SchedulesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class SchedulesPathParams:
    format: SchedulesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class SchedulesRequest:
    path_params: SchedulesPathParams = field(default=None)
    

@dataclass
class SchedulesResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
