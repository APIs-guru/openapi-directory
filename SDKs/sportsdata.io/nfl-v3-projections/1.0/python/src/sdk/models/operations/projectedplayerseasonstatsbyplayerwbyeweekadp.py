from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse:
    content_type: str = field(default=None)
    player_season_projection: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
