from dataclasses import dataclass, field



@dataclass
class UnsubscribeFromCategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromCategoryRequest:
    path_params: UnsubscribeFromCategoryPathParams = field(default=None)
    security: UnsubscribeFromCategorySecurity = field(default=None)
    

@dataclass
class UnsubscribeFromCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
