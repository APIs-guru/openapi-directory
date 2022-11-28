from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamGameStatsByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamGameStatsByWeekPathParams:
    format: TeamGameStatsByWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamGameStatsByWeekRequest:
    path_params: TeamGameStatsByWeekPathParams = field()
    

@dataclass
class TeamGameStatsByWeekResponse:
    content_type: str = field()
    status_code: int = field()
    team_games: Optional[List[Any]] = field(default=None)
    
