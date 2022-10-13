from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersListQueryParams:
    dollar_expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_top: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': '$top', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListRequest:
    path_params: UsersListPathParams = field(default=None)
    query_params: UsersListQueryParams = field(default=None)
    

@dataclass
class UsersListResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    user_list_result: Optional[shared.UserListResult] = field(default=None)
    
