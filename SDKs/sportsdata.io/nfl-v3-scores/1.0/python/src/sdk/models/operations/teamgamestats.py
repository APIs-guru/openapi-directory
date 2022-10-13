from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamGameStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamGameStatsPathParams:
    format: TeamGameStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamGameStatsRequest:
    path_params: TeamGameStatsPathParams = field(default=None)
    

@dataclass
class TeamGameStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_games: Optional[List[Any]] = field(default=None)
    
