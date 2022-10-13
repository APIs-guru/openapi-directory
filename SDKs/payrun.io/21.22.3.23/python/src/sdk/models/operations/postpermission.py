from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPermissionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostPermissionRequest:
    headers: PostPermissionHeaders = field(default=None)
    

@dataclass
class PostPermissionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
