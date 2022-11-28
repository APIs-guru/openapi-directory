from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByFreeAgentsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByFreeAgentsPathParams:
    format: PlayerDetailsByFreeAgentsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByFreeAgentsRequest:
    path_params: PlayerDetailsByFreeAgentsPathParams = field()
    

@dataclass
class PlayerDetailsByFreeAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
