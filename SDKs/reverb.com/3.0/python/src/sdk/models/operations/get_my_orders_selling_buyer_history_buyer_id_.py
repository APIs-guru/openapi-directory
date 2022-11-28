from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDPathParams:
    buyer_id: str = field(metadata={'path_param': { 'field_name': 'buyer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDRequest:
    path_params: GetMyOrdersSellingBuyerHistoryBuyerIDPathParams = field()
    security: GetMyOrdersSellingBuyerHistoryBuyerIDSecurity = field()
    

@dataclass
class GetMyOrdersSellingBuyerHistoryBuyerIDResponse:
    content_type: str = field()
    status_code: int = field()
    
