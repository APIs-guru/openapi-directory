from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams = field()
    

@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
