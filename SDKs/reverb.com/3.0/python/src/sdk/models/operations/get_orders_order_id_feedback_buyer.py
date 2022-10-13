from dataclasses import dataclass, field



@dataclass
class GetOrdersOrderIDFeedbackBuyerPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDFeedbackBuyerRequest:
    path_params: GetOrdersOrderIDFeedbackBuyerPathParams = field(default=None)
    

@dataclass
class GetOrdersOrderIDFeedbackBuyerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
