from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideosToProjectAlt1PathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideosToProjectAlt1QueryParams:
    uris: str = field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class AddVideosToProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideosToProjectAlt1Request:
    path_params: AddVideosToProjectAlt1PathParams = field()
    query_params: AddVideosToProjectAlt1QueryParams = field()
    security: AddVideosToProjectAlt1Security = field()
    

@dataclass
class AddVideosToProjectAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
