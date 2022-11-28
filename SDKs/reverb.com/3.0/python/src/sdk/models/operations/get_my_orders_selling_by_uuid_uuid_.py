from dataclasses import dataclass, field



@dataclass
class GetMyOrdersSellingByUUIDUUIDPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyOrdersSellingByUUIDUUIDRequest:
    path_params: GetMyOrdersSellingByUUIDUUIDPathParams = field()
    

@dataclass
class GetMyOrdersSellingByUUIDUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
