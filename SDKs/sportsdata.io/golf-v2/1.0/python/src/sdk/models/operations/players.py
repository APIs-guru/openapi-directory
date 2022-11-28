from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayersPathParams:
    format: PlayersFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayersRequest:
    path_params: PlayersPathParams = field()
    

@dataclass
class PlayersResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
