from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class UpcomingScheduleByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class UpcomingScheduleByPlayerPathParams:
    format: UpcomingScheduleByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpcomingScheduleByPlayerRequest:
    path_params: UpcomingScheduleByPlayerPathParams = field(default=None)
    

@dataclass
class UpcomingScheduleByPlayerResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
