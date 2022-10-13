from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerDetailsByActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByActivePathParams:
    format: PlayerDetailsByActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByActiveRequest:
    path_params: PlayerDetailsByActivePathParams = field(default=None)
    

@dataclass
class PlayerDetailsByActiveResponse:
    content_type: str = field(default=None)
    players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
