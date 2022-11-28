from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class PlayerTournamentStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerTournamentStatsByPlayerPathParams:
    format: PlayerTournamentStatsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerTournamentStatsByPlayerRequest:
    path_params: PlayerTournamentStatsByPlayerPathParams = field()
    

@dataclass
class PlayerTournamentStatsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    player_tournament: Optional[Any] = field(default=None)
    
