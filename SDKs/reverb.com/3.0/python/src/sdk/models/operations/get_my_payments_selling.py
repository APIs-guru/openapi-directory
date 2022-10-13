from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMyPaymentsSellingQueryParams:
    created_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created_end_date', 'style': 'form', 'explode': True }})
    created_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created_start_date', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    updated_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_end_date', 'style': 'form', 'explode': True }})
    updated_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyPaymentsSellingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPaymentsSellingRequest:
    query_params: GetMyPaymentsSellingQueryParams = field(default=None)
    security: GetMyPaymentsSellingSecurity = field(default=None)
    

@dataclass
class GetMyPaymentsSellingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
