from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class StadiumsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class StadiumsPathParams:
    format: StadiumsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class StadiumsRequest:
    path_params: StadiumsPathParams = field(default=None)
    

@dataclass
class StadiumsResponse:
    content_type: str = field(default=None)
    stadiums: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
