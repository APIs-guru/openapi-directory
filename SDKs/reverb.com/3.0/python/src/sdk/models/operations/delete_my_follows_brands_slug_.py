from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsBrandsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsBrandsSlugRequest:
    path_params: DeleteMyFollowsBrandsSlugPathParams = field(default=None)
    security: DeleteMyFollowsBrandsSlugSecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsBrandsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
