from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerGameStatsDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameStatsDeltaPathParams:
    format: PlayerGameStatsDeltaFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsDeltaRequest:
    path_params: PlayerGameStatsDeltaPathParams = field(default=None)
    

@dataclass
class PlayerGameStatsDeltaResponse:
    content_type: str = field(default=None)
    player_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
