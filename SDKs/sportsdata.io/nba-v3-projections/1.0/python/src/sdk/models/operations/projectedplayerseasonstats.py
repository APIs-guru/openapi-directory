from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsPathParams:
    format: ProjectedPlayerSeasonStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsRequest:
    path_params: ProjectedPlayerSeasonStatsPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsResponse:
    content_type: str = field(default=None)
    player_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
