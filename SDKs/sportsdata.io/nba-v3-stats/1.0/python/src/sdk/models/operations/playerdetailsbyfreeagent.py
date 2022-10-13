from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByFreeAgentFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByFreeAgentPathParams:
    format: PlayerDetailsByFreeAgentFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByFreeAgentRequest:
    path_params: PlayerDetailsByFreeAgentPathParams = field(default=None)
    

@dataclass
class PlayerDetailsByFreeAgentResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
