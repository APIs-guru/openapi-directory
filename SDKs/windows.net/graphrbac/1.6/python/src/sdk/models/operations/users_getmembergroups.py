from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetMemberGroupsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetMemberGroupsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersGetMemberGroupsRequests:
    user_get_member_groups_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_get_member_groups_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UsersGetMemberGroupsRequest:
    path_params: UsersGetMemberGroupsPathParams = field()
    query_params: UsersGetMemberGroupsQueryParams = field()
    request: UsersGetMemberGroupsRequests = field()
    

@dataclass
class UsersGetMemberGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    user_get_member_groups_result: Optional[shared.UserGetMemberGroupsResult] = field(default=None)
    
