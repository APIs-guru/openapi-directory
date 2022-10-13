from dataclasses import dataclass, field



@dataclass
class PostMyFollowsCategoriesUUIDPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesUUIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesUUIDRequest:
    path_params: PostMyFollowsCategoriesUUIDPathParams = field(default=None)
    security: PostMyFollowsCategoriesUUIDSecurity = field(default=None)
    

@dataclass
class PostMyFollowsCategoriesUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
