from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerGameLogsBySeasonFormatEnum(str, Enum):
    JSON = "JSON"
    XML = "XML"


@dataclass
class PlayerGameLogsBySeasonPathParams:
    format: PlayerGameLogsBySeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofgames: str = field(default=None, metadata={'path_param': { 'field_name': 'numberofgames', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameLogsBySeasonRequest:
    path_params: PlayerGameLogsBySeasonPathParams = field(default=None)
    

@dataclass
class PlayerGameLogsBySeasonResponse:
    content_type: str = field(default=None)
    player_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
