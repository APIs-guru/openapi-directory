from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class FantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyPlayersWithAdpPathParams:
    format: FantasyPlayersWithAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyPlayersWithAdpRequest:
    path_params: FantasyPlayersWithAdpPathParams = field()
    

@dataclass
class FantasyPlayersWithAdpResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_players: Optional[List[Any]] = field(default=None)
    
