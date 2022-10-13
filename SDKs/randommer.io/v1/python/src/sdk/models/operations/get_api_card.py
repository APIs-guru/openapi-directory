from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPICardQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPICardHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPICardRequest:
    query_params: GetAPICardQueryParams = field(default=None)
    headers: GetAPICardHeaders = field(default=None)
    

@dataclass
class GetAPICardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
