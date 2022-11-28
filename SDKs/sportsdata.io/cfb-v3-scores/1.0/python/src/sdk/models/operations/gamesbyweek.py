from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class GamesByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GamesByWeekPathParams:
    format: GamesByWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesByWeekRequest:
    path_params: GamesByWeekPathParams = field()
    

@dataclass
class GamesByWeekResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
