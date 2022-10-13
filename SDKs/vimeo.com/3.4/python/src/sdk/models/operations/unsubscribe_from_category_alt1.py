from dataclasses import dataclass, field



@dataclass
class UnsubscribeFromCategoryAlt1PathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromCategoryAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromCategoryAlt1Request:
    path_params: UnsubscribeFromCategoryAlt1PathParams = field(default=None)
    security: UnsubscribeFromCategoryAlt1Security = field(default=None)
    

@dataclass
class UnsubscribeFromCategoryAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
