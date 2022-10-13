from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonStatsWWorldGolfRankingsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonStatsWWorldGolfRankingsPathParams:
    format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsWWorldGolfRankingsRequest:
    path_params: PlayerSeasonStatsWWorldGolfRankingsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonStatsWWorldGolfRankingsResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
