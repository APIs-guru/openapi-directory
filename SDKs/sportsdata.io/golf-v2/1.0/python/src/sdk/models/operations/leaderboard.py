from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class LeaderboardFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LeaderboardPathParams:
    format: LeaderboardFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(default=None, metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaderboardRequest:
    path_params: LeaderboardPathParams = field(default=None)
    

@dataclass
class LeaderboardResponse:
    content_type: str = field(default=None)
    leaderboard: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
