from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PlayerSeasonSplitStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class PlayerSeasonSplitStatsSplitEnum(str, Enum):
    L = "L"
    R = "R"
    S = "S"


@dataclass
class PlayerSeasonSplitStatsPathParams:
    format: PlayerSeasonSplitStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    split: PlayerSeasonSplitStatsSplitEnum = field(metadata={'path_param': { 'field_name': 'split', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayerSeasonSplitStatsRequest:
    path_params: PlayerSeasonSplitStatsPathParams = field()
    

@dataclass
class PlayerSeasonSplitStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
