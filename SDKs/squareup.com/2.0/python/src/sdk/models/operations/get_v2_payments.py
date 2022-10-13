from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV2PaymentsQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    card_brand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'card_brand', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    last_4: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_4', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    total: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'total', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV2PaymentsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV2PaymentsRequest:
    query_params: GetV2PaymentsQueryParams = field(default=None)
    security: GetV2PaymentsSecurity = field(default=None)
    

@dataclass
class GetV2PaymentsResponse:
    content_type: str = field(default=None)
    list_payments_response: Optional[shared.ListPaymentsResponse] = field(default=None)
    status_code: int = field(default=None)
    
