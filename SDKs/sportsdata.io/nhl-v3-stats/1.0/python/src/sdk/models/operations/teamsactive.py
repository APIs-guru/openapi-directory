from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class TeamsActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class TeamsActivePathParams:
    format: TeamsActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsActiveRequest:
    path_params: TeamsActivePathParams = field(default=None)
    

@dataclass
class TeamsActiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[Any]] = field(default=None)
    
