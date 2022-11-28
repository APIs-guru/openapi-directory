from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams = field()
    

@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_season_projections: Optional[List[Any]] = field(default=None)
    
