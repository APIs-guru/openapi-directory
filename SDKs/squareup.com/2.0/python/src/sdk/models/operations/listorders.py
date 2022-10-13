from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListOrdersPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOrdersQueryParams:
    batch_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'batch_token', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListOrdersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListOrdersRequest:
    path_params: ListOrdersPathParams = field(default=None)
    query_params: ListOrdersQueryParams = field(default=None)
    security: ListOrdersSecurity = field(default=None)
    

@dataclass
class ListOrdersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_orders: Optional[List[shared.V1Order]] = field(default=None)
    
