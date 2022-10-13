from dataclasses import dataclass, field



@dataclass
class PostMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(default=None, metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: PostMyFollowsCategoriesCategorySubcategoryPathParams = field(default=None)
    security: PostMyFollowsCategoriesCategorySubcategorySecurity = field(default=None)
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
