from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnsubscribeFromCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromCategoryRequest:
    path_params: UnsubscribeFromCategoryPathParams = field()
    security: UnsubscribeFromCategorySecurity = field()
    

@dataclass
class UnsubscribeFromCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
