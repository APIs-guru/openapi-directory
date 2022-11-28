from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerGameStatsByWeekDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameStatsByWeekDeltaPathParams:
    format: PlayerGameStatsByWeekDeltaFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsByWeekDeltaRequest:
    path_params: PlayerGameStatsByWeekDeltaPathParams = field()
    

@dataclass
class PlayerGameStatsByWeekDeltaResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
