from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFolderPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFolderSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFolderRequest:
    path_params: GetFolderPathParams = field()
    query_params: GetFolderQueryParams = field()
    security: GetFolderSecurity = field()
    

@dataclass
class GetFolderResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    
