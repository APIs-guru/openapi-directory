from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayersPathParams:
    format: PlayersFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayersRequest:
    path_params: PlayersPathParams = field(default=None)
    

@dataclass
class PlayersResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
