from dataclasses import dataclass, field



@dataclass
class PostOrdersOrderIDFeedbackSellerPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersOrderIDFeedbackSellerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersOrderIDFeedbackSellerRequest:
    path_params: PostOrdersOrderIDFeedbackSellerPathParams = field(default=None)
    security: PostOrdersOrderIDFeedbackSellerSecurity = field(default=None)
    

@dataclass
class PostOrdersOrderIDFeedbackSellerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
