from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FlagPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagPostRequestBody:
    details: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'details' }})
    reason: str = field(default=None, metadata={'multipart_form': { 'field_name': 'reason' }})
    

@dataclass
class FlagPostRequest:
    path_params: FlagPostPathParams = field(default=None)
    request: FlagPostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FlagPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
