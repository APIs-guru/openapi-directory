from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamsActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsActivePathParams:
    format: TeamsActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsActiveRequest:
    path_params: TeamsActivePathParams = field()
    

@dataclass
class TeamsActiveResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[Any]] = field(default=None)
    
