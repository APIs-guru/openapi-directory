from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsHandpickedSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsHandpickedSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsHandpickedSlugRequest:
    path_params: DeleteMyFollowsHandpickedSlugPathParams = field(default=None)
    security: DeleteMyFollowsHandpickedSlugSecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsHandpickedSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
