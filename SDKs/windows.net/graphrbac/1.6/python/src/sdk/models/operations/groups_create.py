from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsCreatePathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsCreateQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsCreateRequests:
    group_create_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_create_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsCreateRequest:
    path_params: GroupsCreatePathParams = field(default=None)
    query_params: GroupsCreateQueryParams = field(default=None)
    request: GroupsCreateRequests = field(default=None)
    

@dataclass
class GroupsCreateResponse:
    ad_group: Optional[dict[str, dict[str, Any]]] = field(default=None)
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
