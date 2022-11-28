from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsPathParams:
    format: ProjectedPlayerSeasonStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsRequest:
    path_params: ProjectedPlayerSeasonStatsPathParams = field()
    

@dataclass
class ProjectedPlayerSeasonStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_projections: Optional[List[Any]] = field(default=None)
    
