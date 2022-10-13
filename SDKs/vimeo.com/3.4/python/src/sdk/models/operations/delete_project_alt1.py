from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteProjectAlt1PathParams:
    project_id: float = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectAlt1QueryParams:
    should_delete_clips: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProjectAlt1Request:
    path_params: DeleteProjectAlt1PathParams = field(default=None)
    query_params: DeleteProjectAlt1QueryParams = field(default=None)
    security: DeleteProjectAlt1Security = field(default=None)
    

@dataclass
class DeleteProjectAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
