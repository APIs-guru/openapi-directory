from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserCtrlGetUsersPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserCtrlGetUsersQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    login_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'login_name', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class UserCtrlGetUsersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UserCtrlGetUsersRequest:
    path_params: UserCtrlGetUsersPathParams = field(default=None)
    query_params: UserCtrlGetUsersQueryParams = field(default=None)
    security: UserCtrlGetUsersSecurity = field(default=None)
    

@dataclass
class UserCtrlGetUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users_hal_response: Optional[shared.UsersHalResponse] = field(default=None)
    validation_errors_response: Optional[shared.ValidationErrorsResponse] = field(default=None)
    
