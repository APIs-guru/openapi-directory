from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class PlayerSeasonStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsByPlayerPathParams:
    format: PlayerSeasonStatsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsByPlayerRequest:
    path_params: PlayerSeasonStatsByPlayerPathParams = field()
    

@dataclass
class PlayerSeasonStatsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player_season: Optional[Any] = field(default=None)
    
