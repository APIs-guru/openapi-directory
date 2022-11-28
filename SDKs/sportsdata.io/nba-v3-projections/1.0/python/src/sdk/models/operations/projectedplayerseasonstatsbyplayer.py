from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByPlayerPathParams:
    format: ProjectedPlayerSeasonStatsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerRequest:
    path_params: ProjectedPlayerSeasonStatsByPlayerPathParams = field()
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_projection: Optional[Any] = field(default=None)
    
