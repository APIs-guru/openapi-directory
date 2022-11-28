from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMyListingsNegotiationsQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyListingsNegotiationsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyListingsNegotiationsRequest:
    query_params: GetMyListingsNegotiationsQueryParams = field()
    security: GetMyListingsNegotiationsSecurity = field()
    

@dataclass
class GetMyListingsNegotiationsResponse:
    content_type: str = field()
    status_code: int = field()
    
