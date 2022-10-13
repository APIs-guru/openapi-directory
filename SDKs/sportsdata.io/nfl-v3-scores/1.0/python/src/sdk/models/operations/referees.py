from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class RefereesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class RefereesPathParams:
    format: RefereesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefereesRequest:
    path_params: RefereesPathParams = field(default=None)
    

@dataclass
class RefereesResponse:
    content_type: str = field(default=None)
    referees: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
