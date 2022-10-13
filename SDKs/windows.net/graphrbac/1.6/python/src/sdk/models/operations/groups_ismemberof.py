from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsIsMemberOfPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsIsMemberOfQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsIsMemberOfRequests:
    check_group_membership_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    check_group_membership_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsIsMemberOfRequest:
    path_params: GroupsIsMemberOfPathParams = field(default=None)
    query_params: GroupsIsMemberOfQueryParams = field(default=None)
    request: GroupsIsMemberOfRequests = field(default=None)
    

@dataclass
class GroupsIsMemberOfResponse:
    check_group_membership_result: Optional[dict[str, dict[str, Any]]] = field(default=None)
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
