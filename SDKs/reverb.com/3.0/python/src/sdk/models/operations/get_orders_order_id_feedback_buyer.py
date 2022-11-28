from dataclasses import dataclass, field



@dataclass
class GetOrdersOrderIDFeedbackBuyerPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDFeedbackBuyerRequest:
    path_params: GetOrdersOrderIDFeedbackBuyerPathParams = field()
    

@dataclass
class GetOrdersOrderIDFeedbackBuyerResponse:
    content_type: str = field()
    status_code: int = field()
    
