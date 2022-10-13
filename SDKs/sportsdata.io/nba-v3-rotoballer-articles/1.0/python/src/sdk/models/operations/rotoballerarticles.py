from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class RotoballerArticlesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesPathParams:
    format: RotoballerArticlesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesRequest:
    path_params: RotoballerArticlesPathParams = field(default=None)
    

@dataclass
class RotoballerArticlesResponse:
    articles: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
