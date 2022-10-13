from dataclasses import dataclass, field



@dataclass
class SubscribeToCategoryPathParams:
    category: float = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeToCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubscribeToCategoryRequest:
    path_params: SubscribeToCategoryPathParams = field(default=None)
    security: SubscribeToCategorySecurity = field(default=None)
    

@dataclass
class SubscribeToCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
