from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GamesByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GamesByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: GamesByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesByDateRequest:
    path_params: GamesByDatePathParams = field(default=None)
    

@dataclass
class GamesByDateResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
