from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams = field()
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_projections: Optional[List[Any]] = field(default=None)
    
