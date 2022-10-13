from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamSeasonStatsPathParams:
    format: TeamSeasonStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamSeasonStatsRequest:
    path_params: TeamSeasonStatsPathParams = field(default=None)
    

@dataclass
class TeamSeasonStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_seasons: Optional[List[Any]] = field(default=None)
    
