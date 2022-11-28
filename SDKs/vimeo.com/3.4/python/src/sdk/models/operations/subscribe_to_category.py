from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SubscribeToCategoryPathParams:
    category: float = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeToCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubscribeToCategoryRequest:
    path_params: SubscribeToCategoryPathParams = field()
    security: SubscribeToCategorySecurity = field()
    

@dataclass
class SubscribeToCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
