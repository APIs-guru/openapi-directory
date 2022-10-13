from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class FantasyDefenseSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseSeasonStatsPathParams:
    format: FantasyDefenseSeasonStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseSeasonStatsRequest:
    path_params: FantasyDefenseSeasonStatsPathParams = field(default=None)
    

@dataclass
class FantasyDefenseSeasonStatsResponse:
    content_type: str = field(default=None)
    fantasy_defense_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
