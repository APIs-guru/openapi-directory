from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMyNegotiationsBuyingQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyNegotiationsBuyingSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyNegotiationsBuyingRequest:
    query_params: GetMyNegotiationsBuyingQueryParams = field()
    security: GetMyNegotiationsBuyingSecurity = field()
    

@dataclass
class GetMyNegotiationsBuyingResponse:
    content_type: str = field()
    status_code: int = field()
    
