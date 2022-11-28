from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

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
    column: LeagueLeadersBySeasonColumnEnum = field(metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersBySeasonFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersBySeasonPositionEnum = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueLeadersBySeasonRequest:
    path_params: LeagueLeadersBySeasonPathParams = field()
    

@dataclass
class LeagueLeadersBySeasonResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
