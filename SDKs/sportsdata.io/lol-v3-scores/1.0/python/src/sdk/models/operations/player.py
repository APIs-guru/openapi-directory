from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class PlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerPathParams:
    format: PlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerRequest:
    path_params: PlayerPathParams = field(default=None)
    

@dataclass
class PlayerResponse:
    content_type: str = field(default=None)
    player: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
