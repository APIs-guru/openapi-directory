from dataclasses import dataclass, field



@dataclass
class GetMyFollowsBrandsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsBrandsSlugRequest:
    path_params: GetMyFollowsBrandsSlugPathParams = field(default=None)
    security: GetMyFollowsBrandsSlugSecurity = field(default=None)
    

@dataclass
class GetMyFollowsBrandsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
