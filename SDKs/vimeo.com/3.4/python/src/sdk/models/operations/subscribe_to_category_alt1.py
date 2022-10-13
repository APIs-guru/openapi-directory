from dataclasses import dataclass, field



@dataclass
class SubscribeToCategoryAlt1PathParams:
    category: float = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeToCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubscribeToCategoryAlt1Request:
    path_params: SubscribeToCategoryAlt1PathParams = field(default=None)
    security: SubscribeToCategoryAlt1Security = field(default=None)
    

@dataclass
class SubscribeToCategoryAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
