from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamScheduleFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamSchedulePathParams:
    format: TeamScheduleFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamScheduleRequest:
    path_params: TeamSchedulePathParams = field()
    

@dataclass
class TeamScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
