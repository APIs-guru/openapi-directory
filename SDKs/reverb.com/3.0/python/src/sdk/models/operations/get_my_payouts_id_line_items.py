from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyPayoutsIDLineItemsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyPayoutsIDLineItemsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPayoutsIDLineItemsRequest:
    path_params: GetMyPayoutsIDLineItemsPathParams = field()
    security: GetMyPayoutsIDLineItemsSecurity = field()
    

@dataclass
class GetMyPayoutsIDLineItemsResponse:
    content_type: str = field()
    status_code: int = field()
    
