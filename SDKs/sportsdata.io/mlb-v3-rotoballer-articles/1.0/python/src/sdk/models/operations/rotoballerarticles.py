from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class RotoballerArticlesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesPathParams:
    format: RotoballerArticlesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesRequest:
    path_params: RotoballerArticlesPathParams = field()
    

@dataclass
class RotoballerArticlesResponse:
    content_type: str = field()
    status_code: int = field()
    articles: Optional[List[Any]] = field(default=None)
    
