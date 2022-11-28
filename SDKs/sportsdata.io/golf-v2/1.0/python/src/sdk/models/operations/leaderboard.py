from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class LeaderboardFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class LeaderboardPathParams:
    format: LeaderboardFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaderboardRequest:
    path_params: LeaderboardPathParams = field()
    

@dataclass
class LeaderboardResponse:
    content_type: str = field()
    status_code: int = field()
    leaderboard: Optional[Any] = field(default=None)
    
