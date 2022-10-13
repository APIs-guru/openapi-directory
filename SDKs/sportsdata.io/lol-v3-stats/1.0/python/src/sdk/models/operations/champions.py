from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ChampionsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ChampionsPathParams:
    format: ChampionsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChampionsRequest:
    path_params: ChampionsPathParams = field(default=None)
    

@dataclass
class ChampionsResponse:
    champions: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
