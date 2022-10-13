from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

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
    column: LeagueLeadersByWeekColumnEnum = field(default=None, metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersByWeekFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersByWeekPositionEnum = field(default=None, metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeagueLeadersByWeekRequest:
    path_params: LeagueLeadersByWeekPathParams = field(default=None)
    

@dataclass
class LeagueLeadersByWeekResponse:
    content_type: str = field(default=None)
    player_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
