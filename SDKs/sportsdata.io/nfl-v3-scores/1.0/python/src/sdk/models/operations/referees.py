from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class RefereesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class RefereesPathParams:
    format: RefereesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefereesRequest:
    path_params: RefereesPathParams = field()
    

@dataclass
class RefereesResponse:
    content_type: str = field()
    status_code: int = field()
    referees: Optional[List[Any]] = field(default=None)
    
