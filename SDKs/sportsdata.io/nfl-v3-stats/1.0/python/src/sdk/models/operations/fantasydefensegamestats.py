from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class FantasyDefenseGameStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyDefenseGameStatsPathParams:
    format: FantasyDefenseGameStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyDefenseGameStatsRequest:
    path_params: FantasyDefenseGameStatsPathParams = field()
    

@dataclass
class FantasyDefenseGameStatsResponse:
    content_type: str = field()
    status_code: int = field()
    fantasy_defense_games: Optional[List[Any]] = field(default=None)
    
