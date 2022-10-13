from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class LookupQueryParams:
    json: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    number: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': False }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class LookupRequest:
    query_params: LookupQueryParams = field(default=None)
    

@dataclass
class LookupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
