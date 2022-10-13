from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams:
    format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest:
    path_params: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse:
    content_type: str = field(default=None)
    fantasy_defense_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
