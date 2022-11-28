from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsRequest:
    path_params: PostMyOrdersSellingOrderIDRefundRequestsPathParams = field()
    security: PostMyOrdersSellingOrderIDRefundRequestsSecurity = field()
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    
