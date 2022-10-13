from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class AllStarsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class AllStarsPathParams:
    format: AllStarsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class AllStarsRequest:
    path_params: AllStarsPathParams = field(default=None)
    

@dataclass
class AllStarsResponse:
    content_type: str = field(default=None)
    player_infos: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
