from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonThirdDownStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class PlayerSeasonThirdDownStatsPathParams:
    format: PlayerSeasonThirdDownStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonThirdDownStatsRequest:
    path_params: PlayerSeasonThirdDownStatsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonThirdDownStatsResponse:
    content_type: str = field(default=None)
    player_season_third_downs: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
