from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class LookupQueryParams:
    number: List[str] = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': False }})
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    json: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    

@dataclass
class LookupRequest:
    query_params: LookupQueryParams = field()
    

@dataclass
class LookupResponse:
    content_type: str = field()
    status_code: int = field()
    
