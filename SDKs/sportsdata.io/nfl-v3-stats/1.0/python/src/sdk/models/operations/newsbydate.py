from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class NewsByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByDateRequest:
    path_params: NewsByDatePathParams = field(default=None)
    

@dataclass
class NewsByDateResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
