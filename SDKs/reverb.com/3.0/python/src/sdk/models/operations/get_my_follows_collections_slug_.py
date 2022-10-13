from dataclasses import dataclass, field



@dataclass
class GetMyFollowsCollectionsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCollectionsSlugRequest:
    path_params: GetMyFollowsCollectionsSlugPathParams = field(default=None)
    security: GetMyFollowsCollectionsSlugSecurity = field(default=None)
    

@dataclass
class GetMyFollowsCollectionsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
