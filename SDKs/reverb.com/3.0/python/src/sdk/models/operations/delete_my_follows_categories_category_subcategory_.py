from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: DeleteMyFollowsCategoriesCategorySubcategoryPathParams = field()
    security: DeleteMyFollowsCategoriesCategorySubcategorySecurity = field()
    

@dataclass
class DeleteMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
