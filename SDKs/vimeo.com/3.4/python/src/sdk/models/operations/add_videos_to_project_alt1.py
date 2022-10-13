from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideosToProjectAlt1PathParams:
    project_id: float = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideosToProjectAlt1QueryParams:
    uris: str = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class AddVideosToProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideosToProjectAlt1Request:
    path_params: AddVideosToProjectAlt1PathParams = field(default=None)
    query_params: AddVideosToProjectAlt1QueryParams = field(default=None)
    security: AddVideosToProjectAlt1Security = field(default=None)
    

@dataclass
class AddVideosToProjectAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
