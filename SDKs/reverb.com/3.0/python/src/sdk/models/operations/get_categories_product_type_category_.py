from dataclasses import dataclass, field



@dataclass
class GetCategoriesProductTypeCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    product_type: str = field(metadata={'path_param': { 'field_name': 'product_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesProductTypeCategoryRequest:
    path_params: GetCategoriesProductTypeCategoryPathParams = field()
    

@dataclass
class GetCategoriesProductTypeCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
