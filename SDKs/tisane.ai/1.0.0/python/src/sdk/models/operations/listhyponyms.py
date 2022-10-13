from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListHyponymsQueryParams:
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    max_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxLevel', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHyponymsRequest:
    query_params: ListHyponymsQueryParams = field(default=None)
    

@dataclass
class ListHyponymsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
