from dataclasses import dataclass, field



@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDPathParams:
    buyer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'buyer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDRequest:
    path_params: GetMyOrdersSellingBuyerHistoryBuyerIDPathParams = field(default=None)
    security: GetMyOrdersSellingBuyerHistoryBuyerIDSecurity = field(default=None)
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
