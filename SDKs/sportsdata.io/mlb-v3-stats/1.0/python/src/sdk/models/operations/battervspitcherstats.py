from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class BatterVsPitcherStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BatterVsPitcherStatsPathParams:
    format: BatterVsPitcherStatsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hitterid: str = field(metadata={'path_param': { 'field_name': 'hitterid', 'style': 'simple', 'explode': False }})
    pitcherid: str = field(metadata={'path_param': { 'field_name': 'pitcherid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatterVsPitcherStatsRequest:
    path_params: BatterVsPitcherStatsPathParams = field()
    

@dataclass
class BatterVsPitcherStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_seasons: Optional[List[Any]] = field(default=None)
    
