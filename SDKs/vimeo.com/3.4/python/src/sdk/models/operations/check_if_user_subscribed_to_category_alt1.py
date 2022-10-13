from dataclasses import dataclass, field



@dataclass
class CheckIfUserSubscribedToCategoryAlt1PathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Request:
    path_params: CheckIfUserSubscribedToCategoryAlt1PathParams = field(default=None)
    security: CheckIfUserSubscribedToCategoryAlt1Security = field(default=None)
    

@dataclass
class CheckIfUserSubscribedToCategoryAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
