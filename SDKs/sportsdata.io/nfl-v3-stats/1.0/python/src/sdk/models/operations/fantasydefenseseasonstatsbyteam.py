from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class FantasyDefenseSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseSeasonStatsByTeamPathParams:
    format: FantasyDefenseSeasonStatsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseSeasonStatsByTeamRequest:
    path_params: FantasyDefenseSeasonStatsByTeamPathParams = field(default=None)
    

@dataclass
class FantasyDefenseSeasonStatsByTeamResponse:
    content_type: str = field(default=None)
    fantasy_defense_season: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
