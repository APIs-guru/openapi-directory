from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class FantasyDefenseSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseSeasonStatsByTeamPathParams:
    format: FantasyDefenseSeasonStatsByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseSeasonStatsByTeamRequest:
    path_params: FantasyDefenseSeasonStatsByTeamPathParams = field()
    

@dataclass
class FantasyDefenseSeasonStatsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_season: Optional[Any] = field(default=None)
    
