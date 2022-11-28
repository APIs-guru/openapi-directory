from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams = field()
    

@dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[Any]] = field(default=None)
    
