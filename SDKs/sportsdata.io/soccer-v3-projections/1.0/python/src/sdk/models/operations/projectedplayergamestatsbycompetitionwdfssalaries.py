from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams:
    competition: str = field(default=None, metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
