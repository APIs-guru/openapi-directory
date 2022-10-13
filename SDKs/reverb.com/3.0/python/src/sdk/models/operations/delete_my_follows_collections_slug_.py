from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsCollectionsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsCollectionsSlugRequest:
    path_params: DeleteMyFollowsCollectionsSlugPathParams = field(default=None)
    security: DeleteMyFollowsCollectionsSlugSecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsCollectionsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
