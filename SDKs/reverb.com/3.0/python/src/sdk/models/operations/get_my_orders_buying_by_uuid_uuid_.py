from dataclasses import dataclass, field



@dataclass
class GetMyOrdersBuyingByUUIDUUIDPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersBuyingByUUIDUUIDRequest:
    path_params: GetMyOrdersBuyingByUUIDUUIDPathParams = field()
    

@dataclass
class GetMyOrdersBuyingByUUIDUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
