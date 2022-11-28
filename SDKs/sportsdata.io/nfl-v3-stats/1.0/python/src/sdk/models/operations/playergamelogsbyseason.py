from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerGameLogsBySeasonFormatEnum(str, Enum):
    JSON = "JSON"
    XML = "XML"


@dataclass
class PlayerGameLogsBySeasonPathParams:
    format: PlayerGameLogsBySeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofgames: str = field(metadata={'path_param': { 'field_name': 'numberofgames', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameLogsBySeasonRequest:
    path_params: PlayerGameLogsBySeasonPathParams = field()
    

@dataclass
class PlayerGameLogsBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
