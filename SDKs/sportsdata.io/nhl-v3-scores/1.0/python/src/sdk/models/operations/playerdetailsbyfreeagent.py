from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByFreeAgentFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByFreeAgentPathParams:
    format: PlayerDetailsByFreeAgentFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByFreeAgentRequest:
    path_params: PlayerDetailsByFreeAgentPathParams = field()
    

@dataclass
class PlayerDetailsByFreeAgentResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
