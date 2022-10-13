from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GamesByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GamesByWeekPathParams:
    format: GamesByWeekFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesByWeekRequest:
    path_params: GamesByWeekPathParams = field(default=None)
    

@dataclass
class GamesByWeekResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
