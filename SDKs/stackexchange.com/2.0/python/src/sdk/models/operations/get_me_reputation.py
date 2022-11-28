from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMeReputationQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMeReputationRequest:
    query_params: GetMeReputationQueryParams = field()
    

@dataclass
class GetMeReputationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
