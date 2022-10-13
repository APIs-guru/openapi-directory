from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class FantasyDefenseGameStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseGameStatsByTeamPathParams:
    format: FantasyDefenseGameStatsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseGameStatsByTeamRequest:
    path_params: FantasyDefenseGameStatsByTeamPathParams = field(default=None)
    

@dataclass
class FantasyDefenseGameStatsByTeamResponse:
    content_type: str = field(default=None)
    fantasy_defense_game: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
