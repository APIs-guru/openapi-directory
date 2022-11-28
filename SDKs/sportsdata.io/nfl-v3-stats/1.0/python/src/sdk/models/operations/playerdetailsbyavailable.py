from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByAvailableFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByAvailablePathParams:
    format: PlayerDetailsByAvailableFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByAvailableRequest:
    path_params: PlayerDetailsByAvailablePathParams = field()
    

@dataclass
class PlayerDetailsByAvailableResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
