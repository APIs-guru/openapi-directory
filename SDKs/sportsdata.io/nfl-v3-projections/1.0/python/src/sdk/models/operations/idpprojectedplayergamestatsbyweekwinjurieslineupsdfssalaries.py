from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams = field(default=None)
    

@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field(default=None)
    player_game_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
