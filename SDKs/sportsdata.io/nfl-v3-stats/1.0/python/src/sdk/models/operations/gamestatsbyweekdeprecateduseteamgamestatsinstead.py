from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams = field(default=None)
    

@dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
