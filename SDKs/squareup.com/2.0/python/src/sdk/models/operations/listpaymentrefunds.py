from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListPaymentRefundsQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    source_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source_type', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPaymentRefundsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListPaymentRefundsRequest:
    query_params: ListPaymentRefundsQueryParams = field(default=None)
    security: ListPaymentRefundsSecurity = field(default=None)
    

@dataclass
class ListPaymentRefundsResponse:
    content_type: str = field(default=None)
    list_payment_refunds_response: Optional[shared.ListPaymentRefundsResponse] = field(default=None)
    status_code: int = field(default=None)
    
