from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReplyToPostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplyToPostRequestBody:
    message: str = field(metadata={'multipart_form': { 'field_name': 'message' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    

@dataclass
class ReplyToPostRequest:
    path_params: ReplyToPostPathParams = field()
    request: ReplyToPostRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReplyToPostResponse:
    content_type: str = field()
    status_code: int = field()
    
