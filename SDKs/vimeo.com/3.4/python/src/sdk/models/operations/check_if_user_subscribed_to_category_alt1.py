from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CheckIfUserSubscribedToCategoryAlt1PathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Request:
    path_params: CheckIfUserSubscribedToCategoryAlt1PathParams = field()
    security: CheckIfUserSubscribedToCategoryAlt1Security = field()
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
