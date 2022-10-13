from dataclasses import dataclass, field



@dataclass
class PostMyFollowsCollectionsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCollectionsSlugRequest:
    path_params: PostMyFollowsCollectionsSlugPathParams = field(default=None)
    security: PostMyFollowsCollectionsSlugSecurity = field(default=None)
    

@dataclass
class PostMyFollowsCollectionsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
