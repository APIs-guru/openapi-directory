from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ChampionsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ChampionsPathParams:
    format: ChampionsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChampionsRequest:
    path_params: ChampionsPathParams = field()
    

@dataclass
class ChampionsResponse:
    content_type: str = field()
    status_code: int = field()
    champions: Optional[List[Any]] = field(default=None)
    
