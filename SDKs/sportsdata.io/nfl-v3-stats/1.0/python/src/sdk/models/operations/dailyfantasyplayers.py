from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DailyFantasyPlayersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DailyFantasyPlayersPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DailyFantasyPlayersFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DailyFantasyPlayersRequest:
    path_params: DailyFantasyPlayersPathParams = field(default=None)
    

@dataclass
class DailyFantasyPlayersResponse:
    content_type: str = field(default=None)
    daily_fantasy_players: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
