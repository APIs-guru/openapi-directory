from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class IdpFantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpFantasyPlayersWithAdpPathParams:
    format: IdpFantasyPlayersWithAdpFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpFantasyPlayersWithAdpRequest:
    path_params: IdpFantasyPlayersWithAdpPathParams = field(default=None)
    

@dataclass
class IdpFantasyPlayersWithAdpResponse:
    content_type: str = field(default=None)
    fantasy_players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
