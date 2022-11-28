from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


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
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPaymentsSellingRequest:
    query_params: GetMyPaymentsSellingQueryParams = field()
    security: GetMyPaymentsSellingSecurity = field()
    

@dataclass
class GetMyPaymentsSellingResponse:
    content_type: str = field()
    status_code: int = field()
    
