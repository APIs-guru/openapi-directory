from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonAwayStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonAwayStatsPathParams:
    format: PlayerSeasonAwayStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonAwayStatsRequest:
    path_params: PlayerSeasonAwayStatsPathParams = field()
    

@dataclass
class PlayerSeasonAwayStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
