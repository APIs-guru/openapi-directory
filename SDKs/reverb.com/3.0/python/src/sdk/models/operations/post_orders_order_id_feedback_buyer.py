from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostOrdersOrderIDFeedbackBuyerPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerRequest:
    path_params: PostOrdersOrderIDFeedbackBuyerPathParams = field()
    security: PostOrdersOrderIDFeedbackBuyerSecurity = field()
    

@dataclass
class PostOrdersOrderIDFeedbackBuyerResponse:
    content_type: str = field()
    status_code: int = field()
    
