from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: GetMyFollowsCategoriesCategorySubcategoryPathParams = field()
    security: GetMyFollowsCategoriesCategorySubcategorySecurity = field()
    

@dataclass
class GetMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
