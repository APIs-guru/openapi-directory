from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListPaymentsPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListPaymentsQueryParams:
    batch_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'batch_token', 'style': 'form', 'explode': True }})
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    include_partial: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_partial', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPaymentsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListPaymentsRequest:
    path_params: ListPaymentsPathParams = field(default=None)
    query_params: ListPaymentsQueryParams = field(default=None)
    security: ListPaymentsSecurity = field(default=None)
    

@dataclass
class ListPaymentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_payments: Optional[List[shared.V1Payment]] = field(default=None)
    
