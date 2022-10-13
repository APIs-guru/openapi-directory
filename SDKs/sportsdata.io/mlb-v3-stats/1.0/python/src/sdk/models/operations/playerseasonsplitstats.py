from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PlayerSeasonSplitStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class PlayerSeasonSplitStatsSplitEnum(str, Enum):
    L = "L"
    R = "R"
    S = "S"


@dataclass
class PlayerSeasonSplitStatsPathParams:
    format: PlayerSeasonSplitStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    split: PlayerSeasonSplitStatsSplitEnum = field(default=None, metadata={'path_param': { 'field_name': 'split', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonSplitStatsRequest:
    path_params: PlayerSeasonSplitStatsPathParams = field(default=None)
    

@dataclass
class PlayerSeasonSplitStatsResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
