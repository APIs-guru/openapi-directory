from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerDetailsByActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByActivePathParams:
    format: PlayerDetailsByActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByActiveRequest:
    path_params: PlayerDetailsByActivePathParams = field()
    

@dataclass
class PlayerDetailsByActiveResponse:
    content_type: str = field()
    status_code: int = field()
    players: Optional[List[Any]] = field(default=None)
    
