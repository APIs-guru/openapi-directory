from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class PlayerTournamentStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerTournamentStatsByPlayerPathParams:
    format: PlayerTournamentStatsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(default=None, metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerTournamentStatsByPlayerRequest:
    path_params: PlayerTournamentStatsByPlayerPathParams = field(default=None)
    

@dataclass
class PlayerTournamentStatsByPlayerResponse:
    content_type: str = field(default=None)
    player_tournament: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
