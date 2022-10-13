from dataclasses import dataclass, field



@dataclass
class UnfollowUserAlt1PathParams:
    follow_user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnfollowUserAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnfollowUserAlt1Request:
    path_params: UnfollowUserAlt1PathParams = field(default=None)
    security: UnfollowUserAlt1Security = field(default=None)
    

@dataclass
class UnfollowUserAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
