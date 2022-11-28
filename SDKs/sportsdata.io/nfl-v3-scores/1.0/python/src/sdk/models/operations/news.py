from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class NewsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class NewsPathParams:
    format: NewsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsRequest:
    path_params: NewsPathParams = field()
    

@dataclass
class NewsResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
