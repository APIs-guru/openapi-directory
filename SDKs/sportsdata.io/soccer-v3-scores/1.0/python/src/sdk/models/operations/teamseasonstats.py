from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamSeasonStatsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class TeamSeasonStatsPathParams:
    format: TeamSeasonStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamSeasonStatsRequest:
    path_params: TeamSeasonStatsPathParams = field()
    

@dataclass
class TeamSeasonStatsResponse:
    content_type: str = field()
    status_code: int = field()
    team_seasons: Optional[List[Any]] = field(default=None)
    
