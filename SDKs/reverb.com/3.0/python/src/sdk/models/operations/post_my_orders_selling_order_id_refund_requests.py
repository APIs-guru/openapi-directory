from dataclasses import dataclass, field



@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsRequest:
    path_params: PostMyOrdersSellingOrderIDRefundRequestsPathParams = field(default=None)
    security: PostMyOrdersSellingOrderIDRefundRequestsSecurity = field(default=None)
    

@dataclass
class PostMyOrdersSellingOrderIDRefundRequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
