from dataclasses import dataclass, field



@dataclass
class GetMyPayoutsIDLineItemsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyPayoutsIDLineItemsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPayoutsIDLineItemsRequest:
    path_params: GetMyPayoutsIDLineItemsPathParams = field(default=None)
    security: GetMyPayoutsIDLineItemsSecurity = field(default=None)
    

@dataclass
class GetMyPayoutsIDLineItemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
