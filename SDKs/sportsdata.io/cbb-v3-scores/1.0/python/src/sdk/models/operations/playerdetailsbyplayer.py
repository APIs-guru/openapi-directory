from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerDetailsByPlayerPathParams:
    format: PlayerDetailsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerDetailsByPlayerRequest:
    path_params: PlayerDetailsByPlayerPathParams = field()
    

@dataclass
class PlayerDetailsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player: Optional[Any] = field(default=None)
    
