from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams = field(default=None)
    

@dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse:
    content_type: str = field(default=None)
    fantasy_defense_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
