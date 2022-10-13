from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class LeagueLeadersBySeasonColumnEnum(str, Enum):
    FANTASY_POINTS = "FantasyPoints"
    PASSING_YARDS = "PassingYards"
    RUSHING_YARDS = "RushingYards"
    RECEPTIONS = "Receptions"
    SACKS = "Sacks"
    INTERCEPTIONS = "Interceptions"
    TOUCHDOWNS = "Touchdowns"

class LeagueLeadersBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class LeagueLeadersBySeasonPositionEnum(str, Enum):
    ALL = "ALL"
    OFFENSE = "OFFENSE"
    QB = "QB"
    RB = "RB"
    WR = "WR"
    TE = "TE"
    DEFENSE = "DEFENSE"
    DL = "DL"
    LB = "LB"
    DB = "DB"
    K = "K"


@dataclass
class LeagueLeadersBySeasonPathParams:
    column: LeagueLeadersBySeasonColumnEnum = field(default=None, metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersBySeasonFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersBySeasonPositionEnum = field(default=None, metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueLeadersBySeasonRequest:
    path_params: LeagueLeadersBySeasonPathParams = field(default=None)
    

@dataclass
class LeagueLeadersBySeasonResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
