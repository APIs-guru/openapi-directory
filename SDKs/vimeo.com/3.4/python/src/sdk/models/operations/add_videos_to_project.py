from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideosToProjectPathParams:
    project_id: float = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideosToProjectQueryParams:
    uris: str = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class AddVideosToProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideosToProjectRequest:
    path_params: AddVideosToProjectPathParams = field(default=None)
    query_params: AddVideosToProjectQueryParams = field(default=None)
    security: AddVideosToProjectSecurity = field(default=None)
    

@dataclass
class AddVideosToProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
