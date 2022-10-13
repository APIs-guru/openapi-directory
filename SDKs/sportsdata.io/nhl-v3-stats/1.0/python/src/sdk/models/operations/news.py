from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class NewsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class NewsPathParams:
    format: NewsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsRequest:
    path_params: NewsPathParams = field(default=None)
    

@dataclass
class NewsResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
