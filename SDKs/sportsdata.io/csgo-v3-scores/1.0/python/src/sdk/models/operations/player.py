from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class PlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerPathParams:
    format: PlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerRequest:
    path_params: PlayerPathParams = field()
    

@dataclass
class PlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player: Optional[Any] = field(default=None)
    
