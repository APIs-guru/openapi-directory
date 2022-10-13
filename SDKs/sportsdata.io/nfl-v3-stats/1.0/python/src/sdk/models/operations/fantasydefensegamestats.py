from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class FantasyDefenseGameStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseGameStatsPathParams:
    format: FantasyDefenseGameStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseGameStatsRequest:
    path_params: FantasyDefenseGameStatsPathParams = field(default=None)
    

@dataclass
class FantasyDefenseGameStatsResponse:
    content_type: str = field(default=None)
    fantasy_defense_games: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
