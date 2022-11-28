from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams = field()
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_projection: Optional[Any] = field(default=None)
    
