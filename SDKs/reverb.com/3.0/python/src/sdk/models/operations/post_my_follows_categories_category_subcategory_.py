from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsCategoriesCategorySubcategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    subcategory: str = field(metadata={'path_param': { 'field_name': 'subcategory', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategoryRequest:
    path_params: PostMyFollowsCategoriesCategorySubcategoryPathParams = field()
    security: PostMyFollowsCategoriesCategorySubcategorySecurity = field()
    

@dataclass
class PostMyFollowsCategoriesCategorySubcategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
