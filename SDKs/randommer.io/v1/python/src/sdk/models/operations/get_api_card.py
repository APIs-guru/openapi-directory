from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPICardQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPICardHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPICardRequest:
    headers: GetAPICardHeaders = field()
    query_params: GetAPICardQueryParams = field()
    

@dataclass
class GetAPICardResponse:
    content_type: str = field()
    status_code: int = field()
    
