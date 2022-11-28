from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ListPaymentChangesQueryParams:
    payor_id: str = field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPaymentChangesRequest:
    query_params: ListPaymentChangesQueryParams = field()
    

@dataclass
class ListPaymentChangesResponse:
    content_type: str = field()
    status_code: int = field()
    payment_delta_response_v1: Optional[shared.PaymentDeltaResponseV1] = field(default=None)
    
