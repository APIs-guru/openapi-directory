from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamScheduleFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamSchedulePathParams:
    format: TeamScheduleFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamScheduleRequest:
    path_params: TeamSchedulePathParams = field(default=None)
    

@dataclass
class TeamScheduleResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
