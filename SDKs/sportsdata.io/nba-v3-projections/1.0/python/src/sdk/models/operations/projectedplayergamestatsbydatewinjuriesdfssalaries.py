from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
