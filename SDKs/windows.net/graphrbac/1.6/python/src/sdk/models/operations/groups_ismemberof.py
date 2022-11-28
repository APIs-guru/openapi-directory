from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsIsMemberOfPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsIsMemberOfQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsIsMemberOfRequests:
    check_group_membership_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    check_group_membership_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsIsMemberOfRequest:
    path_params: GroupsIsMemberOfPathParams = field()
    query_params: GroupsIsMemberOfQueryParams = field()
    request: GroupsIsMemberOfRequests = field()
    

@dataclass
class GroupsIsMemberOfResponse:
    content_type: str = field()
    status_code: int = field()
    check_group_membership_result: Optional[dict[str, dict[str, Any]]] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
