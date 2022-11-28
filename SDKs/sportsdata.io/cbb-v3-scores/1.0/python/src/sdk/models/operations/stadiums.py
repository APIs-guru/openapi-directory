from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class StadiumsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class StadiumsPathParams:
    format: StadiumsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class StadiumsRequest:
    path_params: StadiumsPathParams = field()
    

@dataclass
class StadiumsResponse:
    content_type: str = field()
    status_code: int = field()
    stadiums: Optional[List[Any]] = field(default=None)
    
