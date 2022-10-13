from dataclasses import dataclass, field



@dataclass
class GetMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(default=None, metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: GetMyFollowsCategoriesCategorySubcategoryPathParams = field(default=None)
    security: GetMyFollowsCategoriesCategorySubcategorySecurity = field(default=None)
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
