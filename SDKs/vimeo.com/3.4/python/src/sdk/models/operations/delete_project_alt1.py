from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteProjectAlt1PathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectAlt1QueryParams:
    should_delete_clips: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProjectAlt1Request:
    path_params: DeleteProjectAlt1PathParams = field()
    query_params: DeleteProjectAlt1QueryParams = field()
    security: DeleteProjectAlt1Security = field()
    

@dataclass
class DeleteProjectAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
