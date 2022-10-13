from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetMyListingsNegotiationsQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyListingsNegotiationsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyListingsNegotiationsRequest:
    query_params: GetMyListingsNegotiationsQueryParams = field(default=None)
    security: GetMyListingsNegotiationsSecurity = field(default=None)
    

@dataclass
class GetMyListingsNegotiationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
