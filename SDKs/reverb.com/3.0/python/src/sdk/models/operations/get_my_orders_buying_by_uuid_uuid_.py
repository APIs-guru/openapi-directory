from dataclasses import dataclass, field



@dataclass
class GetMyOrdersBuyingByUUIDUUIDPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersBuyingByUUIDUUIDRequest:
    path_params: GetMyOrdersBuyingByUUIDUUIDPathParams = field(default=None)
    

@dataclass
class GetMyOrdersBuyingByUUIDUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
