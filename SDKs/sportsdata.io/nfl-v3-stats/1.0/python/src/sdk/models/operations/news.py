from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class NewsPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsRequest:
    path_params: NewsPathParams = field()
    

@dataclass
class NewsResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
