from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ListHyponymsQueryParams:
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    max_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxLevel', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHyponymsRequest:
    query_params: ListHyponymsQueryParams = field()
    

@dataclass
class ListHyponymsResponse:
    content_type: str = field()
    status_code: int = field()
    
