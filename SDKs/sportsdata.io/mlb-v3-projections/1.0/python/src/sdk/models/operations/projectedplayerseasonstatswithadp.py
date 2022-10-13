from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerSeasonStatsWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsWithAdpPathParams:
    format: ProjectedPlayerSeasonStatsWithAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsWithAdpRequest:
    path_params: ProjectedPlayerSeasonStatsWithAdpPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsWithAdpResponse:
    content_type: str = field(default=None)
    player_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
