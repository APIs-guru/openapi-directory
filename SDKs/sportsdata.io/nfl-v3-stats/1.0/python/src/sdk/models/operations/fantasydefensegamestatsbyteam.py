from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class FantasyDefenseGameStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseGameStatsByTeamPathParams:
    format: FantasyDefenseGameStatsByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseGameStatsByTeamRequest:
    path_params: FantasyDefenseGameStatsByTeamPathParams = field()
    

@dataclass
class FantasyDefenseGameStatsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_game: Optional[Any] = field(default=None)
    
