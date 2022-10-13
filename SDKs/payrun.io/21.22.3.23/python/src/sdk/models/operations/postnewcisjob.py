from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNewCisJobHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostNewCisJobRequest:
    headers: PostNewCisJobHeaders = field(default=None)
    request: shared.CisJobInstructionBase = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNewCisJobResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
