from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListRefundsPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRefundsQueryParams:
    batch_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'batch_token', 'style': 'form', 'explode': True }})
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRefundsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListRefundsRequest:
    path_params: ListRefundsPathParams = field(default=None)
    query_params: ListRefundsQueryParams = field(default=None)
    security: ListRefundsSecurity = field(default=None)
    

@dataclass
class ListRefundsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_refunds: Optional[List[shared.V1Refund]] = field(default=None)
    
