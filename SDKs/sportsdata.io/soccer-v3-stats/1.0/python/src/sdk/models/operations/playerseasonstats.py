from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonStatsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PlayerSeasonStatsPathParams:
    format: PlayerSeasonStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = field(default=None, metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonStatsRequest:
    path_params: PlayerSeasonStatsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonStatsResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
