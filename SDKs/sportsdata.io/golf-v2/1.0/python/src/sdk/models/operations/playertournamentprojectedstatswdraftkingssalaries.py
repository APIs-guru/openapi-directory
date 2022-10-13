from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams:
    format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(default=None, metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest:
    path_params: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams = field(default=None)
    

@dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse:
    content_type: str = field(default=None)
    player_tournament_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
