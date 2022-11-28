from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamSeasonStatsStandingsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamSeasonStatsStandingsPathParams:
    format: TeamSeasonStatsStandingsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamSeasonStatsStandingsRequest:
    path_params: TeamSeasonStatsStandingsPathParams = field()
    

@dataclass
class TeamSeasonStatsStandingsResponse:
    content_type: str = field()
    status_code: int = field()
    team_seasons: Optional[List[Any]] = field(default=None)
    
