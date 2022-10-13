from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsAddMemberPathParams:
    group_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsAddMemberQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsAddMemberRequests:
    group_add_member_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_add_member_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsAddMemberRequest:
    path_params: GroupsAddMemberPathParams = field(default=None)
    query_params: GroupsAddMemberQueryParams = field(default=None)
    request: GroupsAddMemberRequests = field(default=None)
    

@dataclass
class GroupsAddMemberResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
