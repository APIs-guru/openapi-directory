from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams:
    format: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
