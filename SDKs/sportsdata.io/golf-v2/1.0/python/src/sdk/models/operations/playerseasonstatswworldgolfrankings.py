from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonStatsWWorldGolfRankingsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsWWorldGolfRankingsPathParams:
    format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsWWorldGolfRankingsRequest:
    path_params: PlayerSeasonStatsWWorldGolfRankingsPathParams = field()
    

@dataclass
class PlayerSeasonStatsWWorldGolfRankingsResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
