from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsPathParams:
    format: TeamsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRequest:
    path_params: TeamsPathParams = field(default=None)
    

@dataclass
class TeamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[Any]] = field(default=None)
    
