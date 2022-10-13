from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class BatterVsPitcherStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class BatterVsPitcherStatsPathParams:
    format: BatterVsPitcherStatsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hitterid: str = field(default=None, metadata={'path_param': { 'field_name': 'hitterid', 'style': 'simple', 'explode': False }})
    pitcherid: str = field(default=None, metadata={'path_param': { 'field_name': 'pitcherid', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatterVsPitcherStatsRequest:
    path_params: BatterVsPitcherStatsPathParams = field(default=None)
    

@dataclass
class BatterVsPitcherStatsResponse:
    content_type: str = field(default=None)
    player_seasons: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
