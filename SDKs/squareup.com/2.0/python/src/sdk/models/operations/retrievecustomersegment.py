from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCustomerSegmentPathParams:
    segment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'segment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveCustomerSegmentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveCustomerSegmentRequest:
    path_params: RetrieveCustomerSegmentPathParams = field(default=None)
    security: RetrieveCustomerSegmentSecurity = field(default=None)
    

@dataclass
class RetrieveCustomerSegmentResponse:
    content_type: str = field(default=None)
    retrieve_customer_segment_response: Optional[shared.RetrieveCustomerSegmentResponse] = field(default=None)
    status_code: int = field(default=None)
    
