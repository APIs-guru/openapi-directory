from dataclasses import dataclass, field



@dataclass
class GetOrdersOrderIDFeedbackSellerPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDFeedbackSellerRequest:
    path_params: GetOrdersOrderIDFeedbackSellerPathParams = field()
    

@dataclass
class GetOrdersOrderIDFeedbackSellerResponse:
    content_type: str = field()
    status_code: int = field()
    
