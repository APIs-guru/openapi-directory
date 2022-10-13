from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsWByeWeekAdpPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpResponse:
    content_type: str = field(default=None)
    player_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
