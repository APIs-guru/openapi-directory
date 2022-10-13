from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByFreeAgentsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByFreeAgentsPathParams:
    format: PlayerDetailsByFreeAgentsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByFreeAgentsRequest:
    path_params: PlayerDetailsByFreeAgentsPathParams = field(default=None)
    

@dataclass
class PlayerDetailsByFreeAgentsResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
