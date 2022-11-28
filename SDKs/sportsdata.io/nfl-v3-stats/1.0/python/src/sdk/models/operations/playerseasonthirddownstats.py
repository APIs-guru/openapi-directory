from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonThirdDownStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonThirdDownStatsPathParams:
    format: PlayerSeasonThirdDownStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonThirdDownStatsRequest:
    path_params: PlayerSeasonThirdDownStatsPathParams = field()
    

@dataclass
class PlayerSeasonThirdDownStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_third_downs: Optional[List[Any]] = field(default=None)
    
