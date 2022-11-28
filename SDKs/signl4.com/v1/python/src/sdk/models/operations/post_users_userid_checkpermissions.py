from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDCheckPermissionsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDCheckPermissionsQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUsersUserIDCheckPermissionsRequests:
    string_items_wrapper: Optional[shared.StringItemsWrapper] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    string_items_wrapper1: Optional[shared.StringItemsWrapper] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string_items_wrapper2: Optional[shared.StringItemsWrapper] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    string_items_wrapper3: Optional[shared.StringItemsWrapper] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostUsersUserIDCheckPermissionsRequest:
    path_params: PostUsersUserIDCheckPermissionsPathParams = field()
    query_params: PostUsersUserIDCheckPermissionsQueryParams = field()
    request: Optional[PostUsersUserIDCheckPermissionsRequests] = field(default=None)
    

@dataclass
class PostUsersUserIDCheckPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_image: Optional[shared.UserImage] = field(default=None)
    
