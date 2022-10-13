from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projection: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
