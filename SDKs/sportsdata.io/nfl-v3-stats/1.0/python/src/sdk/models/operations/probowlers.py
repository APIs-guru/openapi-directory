from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ProBowlersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProBowlersPathParams:
    format: ProBowlersFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProBowlersRequest:
    path_params: ProBowlersPathParams = field()
    

@dataclass
class ProBowlersResponse:
    content_type: str = field()
    status_code: int = field()
    player_infos: Optional[List[Any]] = field(default=None)
    
