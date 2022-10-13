from dataclasses import dataclass, field



@dataclass
class PostOrdersOrderIDFeedbackBuyerPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerRequest:
    path_params: PostOrdersOrderIDFeedbackBuyerPathParams = field(default=None)
    security: PostOrdersOrderIDFeedbackBuyerSecurity = field(default=None)
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
