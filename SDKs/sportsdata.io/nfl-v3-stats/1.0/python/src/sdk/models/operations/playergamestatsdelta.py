from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerGameStatsDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameStatsDeltaPathParams:
    format: PlayerGameStatsDeltaFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsDeltaRequest:
    path_params: PlayerGameStatsDeltaPathParams = field()
    

@dataclass
class PlayerGameStatsDeltaResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
