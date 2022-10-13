from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse:
    content_type: str = field(default=None)
    player_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
