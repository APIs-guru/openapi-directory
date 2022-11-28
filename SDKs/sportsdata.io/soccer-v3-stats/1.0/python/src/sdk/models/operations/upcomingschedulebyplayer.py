from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class UpcomingScheduleByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class UpcomingScheduleByPlayerPathParams:
    format: UpcomingScheduleByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpcomingScheduleByPlayerRequest:
    path_params: UpcomingScheduleByPlayerPathParams = field()
    

@dataclass
class UpcomingScheduleByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
