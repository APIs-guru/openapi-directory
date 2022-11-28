from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class LeagueLeadersByWeekColumnEnum(str, Enum):
    FANTASY_POINTS = "FantasyPoints"
    PASSING_YARDS = "PassingYards"
    RUSHING_YARDS = "RushingYards"
    RECEPTIONS = "Receptions"
    SACKS = "Sacks"
    INTERCEPTIONS = "Interceptions"
    TOUCHDOWNS = "Touchdowns"

class LeagueLeadersByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class LeagueLeadersByWeekPositionEnum(str, Enum):
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
class LeagueLeadersByWeekPathParams:
    column: LeagueLeadersByWeekColumnEnum = field(metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersByWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersByWeekPositionEnum = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueLeadersByWeekRequest:
    path_params: LeagueLeadersByWeekPathParams = field()
    

@dataclass
class LeagueLeadersByWeekResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[Any]] = field(default=None)
    
