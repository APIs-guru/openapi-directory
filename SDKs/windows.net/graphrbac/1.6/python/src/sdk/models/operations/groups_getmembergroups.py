from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsGetMemberGroupsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsGetMemberGroupsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetMemberGroupsRequests:
    group_get_member_groups_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_get_member_groups_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsGetMemberGroupsRequest:
    path_params: GroupsGetMemberGroupsPathParams = field()
    query_params: GroupsGetMemberGroupsQueryParams = field()
    request: GroupsGetMemberGroupsRequests = field()
    

@dataclass
class GroupsGetMemberGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    group_get_member_groups_result: Optional[shared.GroupGetMemberGroupsResult] = field(default=None)
    
