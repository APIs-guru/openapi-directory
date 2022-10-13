from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsByTeamPathParams:
    format: PlayerSeasonStatsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsByTeamRequest:
    path_params: PlayerSeasonStatsByTeamPathParams = field(default=None)
    

@dataclass
class PlayerSeasonStatsByTeamResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
