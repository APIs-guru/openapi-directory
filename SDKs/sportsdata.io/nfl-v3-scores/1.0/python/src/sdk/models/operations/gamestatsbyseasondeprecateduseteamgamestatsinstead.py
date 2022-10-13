from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams = field(default=None)
    

@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = field(default=None)
    games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
