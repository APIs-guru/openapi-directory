from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class IdpFantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpFantasyPlayersWithAdpPathParams:
    format: IdpFantasyPlayersWithAdpFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpFantasyPlayersWithAdpRequest:
    path_params: IdpFantasyPlayersWithAdpPathParams = field()
    

@dataclass
class IdpFantasyPlayersWithAdpResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_players: Optional[List[Any]] = field(default=None)
    
