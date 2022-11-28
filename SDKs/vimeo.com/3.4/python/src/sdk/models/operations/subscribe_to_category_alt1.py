from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SubscribeToCategoryAlt1PathParams:
    category: float = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeToCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubscribeToCategoryAlt1Request:
    path_params: SubscribeToCategoryAlt1PathParams = field()
    security: SubscribeToCategoryAlt1Security = field()
    

@dataclass
class SubscribeToCategoryAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
