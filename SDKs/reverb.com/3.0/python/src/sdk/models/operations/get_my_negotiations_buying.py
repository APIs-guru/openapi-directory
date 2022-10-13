from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMyNegotiationsBuyingQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyNegotiationsBuyingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyNegotiationsBuyingRequest:
    query_params: GetMyNegotiationsBuyingQueryParams = field(default=None)
    security: GetMyNegotiationsBuyingSecurity = field(default=None)
    

@dataclass
class GetMyNegotiationsBuyingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
