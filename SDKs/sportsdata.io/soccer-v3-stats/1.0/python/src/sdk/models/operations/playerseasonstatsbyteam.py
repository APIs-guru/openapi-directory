from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerSeasonStatsByTeamPathParams:
    format: PlayerSeasonStatsByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsByTeamRequest:
    path_params: PlayerSeasonStatsByTeamPathParams = field()
    

@dataclass
class PlayerSeasonStatsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
