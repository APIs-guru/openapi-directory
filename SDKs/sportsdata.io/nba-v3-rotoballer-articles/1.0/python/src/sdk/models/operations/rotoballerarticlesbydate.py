from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class RotoballerArticlesByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: RotoballerArticlesByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesByDateRequest:
    path_params: RotoballerArticlesByDatePathParams = field(default=None)
    

@dataclass
class RotoballerArticlesByDateResponse:
    articles: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
