from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerGameStatsByPlayerPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayerGameStatsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsByPlayerRequest:
    path_params: PlayerGameStatsByPlayerPathParams = field(default=None)
    

@dataclass
class PlayerGameStatsByPlayerResponse:
    content_type: str = field(default=None)
    player_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
