from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostOrdersOrderIDFeedbackSellerPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersOrderIDFeedbackSellerSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersOrderIDFeedbackSellerRequest:
    path_params: PostOrdersOrderIDFeedbackSellerPathParams = field()
    security: PostOrdersOrderIDFeedbackSellerSecurity = field()
    

@dataclass
class PostOrdersOrderIDFeedbackSellerResponse:
    content_type: str = field()
    status_code: int = field()
    
