from dataclasses import dataclass, field



@dataclass
class CheckIfUserSubscribedToCategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfUserSubscribedToCategoryRequest:
    path_params: CheckIfUserSubscribedToCategoryPathParams = field(default=None)
    security: CheckIfUserSubscribedToCategorySecurity = field(default=None)
    

@dataclass
class CheckIfUserSubscribedToCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
