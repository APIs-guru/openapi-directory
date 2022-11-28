from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class AllStarsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class AllStarsPathParams:
    format: AllStarsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclass
class AllStarsRequest:
    path_params: AllStarsPathParams = field()
    

@dataclass
class AllStarsResponse:
    content_type: str = field()
    status_code: int = field()
    player_infos: Optional[List[Any]] = field(default=None)
    
