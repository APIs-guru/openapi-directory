from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class FantasyDefenseSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseSeasonStatsPathParams:
    format: FantasyDefenseSeasonStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseSeasonStatsRequest:
    path_params: FantasyDefenseSeasonStatsPathParams = field()
    

@dataclass
class FantasyDefenseSeasonStatsResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_seasons: Optional[List[Any]] = field(default=None)
    
