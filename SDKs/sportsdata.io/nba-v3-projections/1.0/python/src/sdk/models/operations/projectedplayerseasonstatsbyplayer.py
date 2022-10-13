from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class ProjectedPlayerSeasonStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByPlayerPathParams:
    format: ProjectedPlayerSeasonStatsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerRequest:
    path_params: ProjectedPlayerSeasonStatsByPlayerPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerResponse:
    content_type: str = field(default=None)
    player_season_projection: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
