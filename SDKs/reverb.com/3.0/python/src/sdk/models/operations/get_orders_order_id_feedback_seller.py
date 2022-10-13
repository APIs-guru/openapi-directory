from dataclasses import dataclass, field



@dataclass
class GetOrdersOrderIDFeedbackSellerPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDFeedbackSellerRequest:
    path_params: GetOrdersOrderIDFeedbackSellerPathParams = field(default=None)
    

@dataclass
class GetOrdersOrderIDFeedbackSellerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
