from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams:
    format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest:
    path_params: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams = field()
    

@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse:
    content_type: str = field()
    status_code: int = field()
    player_tournament_projections: Optional[List[Any]] = field(default=None)
    
