from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams = field(default=None)
    

@dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projection: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
