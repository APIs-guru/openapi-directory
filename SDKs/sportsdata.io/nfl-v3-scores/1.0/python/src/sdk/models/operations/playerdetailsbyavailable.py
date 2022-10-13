from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByAvailableFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByAvailablePathParams:
    format: PlayerDetailsByAvailableFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByAvailableRequest:
    path_params: PlayerDetailsByAvailablePathParams = field(default=None)
    

@dataclass
class PlayerDetailsByAvailableResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
