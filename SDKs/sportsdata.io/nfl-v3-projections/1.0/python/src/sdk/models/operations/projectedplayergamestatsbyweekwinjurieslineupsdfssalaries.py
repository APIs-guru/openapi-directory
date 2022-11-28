from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams:
    format: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams = field()
    

@dataclass
class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
