from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCustomerSegmentsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerSegmentsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCustomerSegmentsRequest:
    query_params: ListCustomerSegmentsQueryParams = field(default=None)
    security: ListCustomerSegmentsSecurity = field(default=None)
    

@dataclass
class ListCustomerSegmentsResponse:
    content_type: str = field(default=None)
    list_customer_segments_response: Optional[shared.ListCustomerSegmentsResponse] = field(default=None)
    status_code: int = field(default=None)
    
