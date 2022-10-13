from dataclasses import dataclass, field



@dataclass
class GetCategoriesUUIDPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesUUIDRequest:
    path_params: GetCategoriesUUIDPathParams = field(default=None)
    

@dataclass
class GetCategoriesUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
