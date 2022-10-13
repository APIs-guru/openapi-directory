from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerSeasonStatsByTeamPathParams:
    format: ProjectedPlayerSeasonStatsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamRequest:
    path_params: ProjectedPlayerSeasonStatsByTeamPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerSeasonStatsByTeamResponse:
    content_type: str = field(default=None)
    player_season_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
