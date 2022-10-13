from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsRemoveMemberPathParams:
    group_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupObjectId', 'style': 'simple', 'explode': False }})
    member_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'memberObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsRemoveMemberQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsRemoveMemberRequest:
    path_params: GroupsRemoveMemberPathParams = field(default=None)
    query_params: GroupsRemoveMemberQueryParams = field(default=None)
    

@dataclass
class GroupsRemoveMemberResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
