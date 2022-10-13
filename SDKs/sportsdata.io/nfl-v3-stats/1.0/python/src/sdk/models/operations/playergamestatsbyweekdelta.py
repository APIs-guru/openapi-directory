from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerGameStatsByWeekDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerGameStatsByWeekDeltaPathParams:
    format: PlayerGameStatsByWeekDeltaFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = field(default=None, metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerGameStatsByWeekDeltaRequest:
    path_params: PlayerGameStatsByWeekDeltaPathParams = field(default=None)
    

@dataclass
class PlayerGameStatsByWeekDeltaResponse:
    content_type: str = field(default=None)
    player_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
