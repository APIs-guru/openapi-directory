from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonAwayStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonAwayStatsPathParams:
    format: PlayerSeasonAwayStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonAwayStatsRequest:
    path_params: PlayerSeasonAwayStatsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonAwayStatsResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
