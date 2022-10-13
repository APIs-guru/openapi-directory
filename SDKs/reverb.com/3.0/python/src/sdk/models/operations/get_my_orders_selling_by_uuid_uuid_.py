from dataclasses import dataclass, field



@dataclass
class GetMyOrdersSellingByUUIDUUIDPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersSellingByUUIDUUIDRequest:
    path_params: GetMyOrdersSellingByUUIDUUIDPathParams = field(default=None)
    

@dataclass
class GetMyOrdersSellingByUUIDUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
