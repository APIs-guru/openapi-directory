from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnsubscribeFromCategoryAlt1PathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromCategoryAlt1Request:
    path_params: UnsubscribeFromCategoryAlt1PathParams = field()
    security: UnsubscribeFromCategoryAlt1Security = field()
    

@dataclass
class UnsubscribeFromCategoryAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
