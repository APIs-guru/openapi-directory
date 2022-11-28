from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class SeriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SeriesPathParams:
    format: SeriesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SeriesRequest:
    path_params: SeriesPathParams = field()
    

@dataclass
class SeriesResponse:
    content_type: str = field()
    status_code: int = field()
    series: Optional[List[Any]] = field(default=None)
    
