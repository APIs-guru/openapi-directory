from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFolderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFolderSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFolderRequest:
    path_params: GetFolderPathParams = field(default=None)
    query_params: GetFolderQueryParams = field(default=None)
    security: GetFolderSecurity = field(default=None)
    

@dataclass
class GetFolderResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    folder: Optional[shared.Folder] = field(default=None)
    status_code: int = field(default=None)
    
