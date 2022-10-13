from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerSeasonStatsByTeamPathParams:
    format: PlayerSeasonStatsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(default=None, metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsByTeamRequest:
    path_params: PlayerSeasonStatsByTeamPathParams = field(default=None)
    

@dataclass
class PlayerSeasonStatsByTeamResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
