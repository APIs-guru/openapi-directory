from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class SeriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SeriesPathParams:
    format: SeriesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeriesRequest:
    path_params: SeriesPathParams = field(default=None)
    

@dataclass
class SeriesResponse:
    content_type: str = field(default=None)
    series: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
