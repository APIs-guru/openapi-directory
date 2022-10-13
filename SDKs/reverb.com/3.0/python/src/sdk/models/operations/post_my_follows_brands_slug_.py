from dataclasses import dataclass, field



@dataclass
class PostMyFollowsBrandsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsBrandsSlugRequest:
    path_params: PostMyFollowsBrandsSlugPathParams = field(default=None)
    security: PostMyFollowsBrandsSlugSecurity = field(default=None)
    

@dataclass
class PostMyFollowsBrandsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
