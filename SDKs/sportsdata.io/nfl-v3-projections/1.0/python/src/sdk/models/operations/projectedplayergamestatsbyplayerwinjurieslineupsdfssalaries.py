from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams:
    format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projection: Optional[Any] = field(default=None)
    
