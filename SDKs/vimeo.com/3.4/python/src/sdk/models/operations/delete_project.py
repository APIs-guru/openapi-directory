from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteProjectPathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectQueryParams:
    should_delete_clips: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = field()
    query_params: DeleteProjectQueryParams = field()
    security: DeleteProjectSecurity = field()
    

@dataclass
class DeleteProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
