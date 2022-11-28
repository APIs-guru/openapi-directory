from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams = field()
    

@dataclass
class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_projections: Optional[List[Any]] = field(default=None)
    
