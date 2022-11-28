from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_top: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': '$top', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListRequest:
    path_params: UsersListPathParams = field()
    query_params: UsersListQueryParams = field()
    

@dataclass
class UsersListResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    user_list_result: Optional[shared.UserListResult] = field(default=None)
    
