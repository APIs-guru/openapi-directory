from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsWByeWeekAdpPathParams = field()
    

@dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_projections: Optional[List[Any]] = field(default=None)
    
