from dataclasses import dataclass, field



@dataclass
class PostMyFollowsHandpickedSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsHandpickedSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsHandpickedSlugRequest:
    path_params: PostMyFollowsHandpickedSlugPathParams = field(default=None)
    security: PostMyFollowsHandpickedSlugSecurity = field(default=None)
    

@dataclass
class PostMyFollowsHandpickedSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
