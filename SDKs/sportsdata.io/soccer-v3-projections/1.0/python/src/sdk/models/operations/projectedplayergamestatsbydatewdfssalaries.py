from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByDateWDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
