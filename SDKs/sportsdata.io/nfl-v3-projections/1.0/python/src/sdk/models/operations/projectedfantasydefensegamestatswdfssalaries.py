from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams:
    format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest:
    path_params: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams = field()
    

@dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_game_projections: Optional[List[Any]] = field(default=None)
    
