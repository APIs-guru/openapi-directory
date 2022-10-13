from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReplyToPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplyToPostRequestBody:
    message: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    

@dataclass
class ReplyToPostRequest:
    path_params: ReplyToPostPathParams = field(default=None)
    request: ReplyToPostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReplyToPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
