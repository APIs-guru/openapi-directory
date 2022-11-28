from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CheckIfUserSubscribedToCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfUserSubscribedToCategoryRequest:
    path_params: CheckIfUserSubscribedToCategoryPathParams = field()
    security: CheckIfUserSubscribedToCategorySecurity = field()
    

@dataclass
class CheckIfUserSubscribedToCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
