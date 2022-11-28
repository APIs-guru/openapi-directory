from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class TeamsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsPathParams:
    format: TeamsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRequest:
    path_params: TeamsPathParams = field()
    

@dataclass
class TeamsResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[Any]] = field(default=None)
    
