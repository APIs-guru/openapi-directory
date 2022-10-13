from dataclasses import dataclass, field



@dataclass
class GetMyFollowsShopsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsShopsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsShopsSlugRequest:
    path_params: GetMyFollowsShopsSlugPathParams = field(default=None)
    security: GetMyFollowsShopsSlugSecurity = field(default=None)
    

@dataclass
class GetMyFollowsShopsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
