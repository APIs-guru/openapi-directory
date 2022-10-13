from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams = field(default=None)
    

@dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
