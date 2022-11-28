from dataclasses import dataclass, field



@dataclass
class GetCategoriesUUIDPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesUUIDRequest:
    path_params: GetCategoriesUUIDPathParams = field()
    

@dataclass
class GetCategoriesUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
