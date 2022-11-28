from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FlagPostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagPostRequestBody:
    reason: str = field(metadata={'multipart_form': { 'field_name': 'reason' }})
    details: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'details' }})
    

@dataclass
class FlagPostRequest:
    path_params: FlagPostPathParams = field()
    request: FlagPostRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FlagPostResponse:
    content_type: str = field()
    status_code: int = field()
    
