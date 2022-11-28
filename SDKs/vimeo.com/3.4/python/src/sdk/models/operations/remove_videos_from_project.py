from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveVideosFromProjectPathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveVideosFromProjectQueryParams:
    uris: str = field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    should_delete_clips: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveVideosFromProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveVideosFromProjectRequest:
    path_params: RemoveVideosFromProjectPathParams = field()
    query_params: RemoveVideosFromProjectQueryParams = field()
    security: RemoveVideosFromProjectSecurity = field()
    

@dataclass
class RemoveVideosFromProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
