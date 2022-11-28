from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDImagePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDImageQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDImageRequest:
    path_params: GetUsersUserIDImagePathParams = field()
    query_params: GetUsersUserIDImageQueryParams = field()
    

@dataclass
class GetUsersUserIDImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_image: Optional[shared.UserImage] = field(default=None)
    
