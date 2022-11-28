from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamStatsAllowedByPositionFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamStatsAllowedByPositionPathParams:
    format: TeamStatsAllowedByPositionFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamStatsAllowedByPositionRequest:
    path_params: TeamStatsAllowedByPositionPathParams = field()
    

@dataclass
class TeamStatsAllowedByPositionResponse:
    content_type: str = field()
    status_code: int = field()
    team_seasons: Optional[List[Any]] = field(default=None)
    
