from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsRemoveMemberPathParams:
    group_object_id: str = field(metadata={'path_param': { 'field_name': 'groupObjectId', 'style': 'simple', 'explode': False }})
    member_object_id: str = field(metadata={'path_param': { 'field_name': 'memberObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsRemoveMemberQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsRemoveMemberRequest:
    path_params: GroupsRemoveMemberPathParams = field()
    query_params: GroupsRemoveMemberQueryParams = field()
    

@dataclass
class GroupsRemoveMemberResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
