from dataclasses import dataclass, field



@dataclass
class PostMyFollowsShopsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsShopsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsShopsSlugRequest:
    path_params: PostMyFollowsShopsSlugPathParams = field(default=None)
    security: PostMyFollowsShopsSlugSecurity = field(default=None)
    

@dataclass
class PostMyFollowsShopsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
