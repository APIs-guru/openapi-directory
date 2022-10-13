from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProjectedPlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ProjectedPlayerGameStatsByPlayerPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectedPlayerGameStatsByPlayerRequest:
    path_params: ProjectedPlayerGameStatsByPlayerPathParams = field(default=None)
    

@dataclass
class ProjectedPlayerGameStatsByPlayerResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
