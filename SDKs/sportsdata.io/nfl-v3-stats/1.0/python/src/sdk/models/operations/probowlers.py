from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ProBowlersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class ProBowlersPathParams:
    format: ProBowlersFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProBowlersRequest:
    path_params: ProBowlersPathParams = field(default=None)
    

@dataclass
class ProBowlersResponse:
    content_type: str = field(default=None)
    player_infos: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
