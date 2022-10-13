from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(default=None, metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: DeleteMyFollowsCategoriesCategorySubcategoryPathParams = field(default=None)
    security: DeleteMyFollowsCategoriesCategorySubcategorySecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
