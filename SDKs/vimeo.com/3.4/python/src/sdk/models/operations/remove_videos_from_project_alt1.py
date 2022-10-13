from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveVideosFromProjectAlt1PathParams:
    project_id: float = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveVideosFromProjectAlt1QueryParams:
    should_delete_clips: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    uris: str = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveVideosFromProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveVideosFromProjectAlt1Request:
    path_params: RemoveVideosFromProjectAlt1PathParams = field(default=None)
    query_params: RemoveVideosFromProjectAlt1QueryParams = field(default=None)
    security: RemoveVideosFromProjectAlt1Security = field(default=None)
    

@dataclass
class RemoveVideosFromProjectAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
