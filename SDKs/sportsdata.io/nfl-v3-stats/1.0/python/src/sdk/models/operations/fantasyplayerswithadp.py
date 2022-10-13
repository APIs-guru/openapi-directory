from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class FantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyPlayersWithAdpPathParams:
    format: FantasyPlayersWithAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyPlayersWithAdpRequest:
    path_params: FantasyPlayersWithAdpPathParams = field(default=None)
    

@dataclass
class FantasyPlayersWithAdpResponse:
    content_type: str = field(default=None)
    fantasy_players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
