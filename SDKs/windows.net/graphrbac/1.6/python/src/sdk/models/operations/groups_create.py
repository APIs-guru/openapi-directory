from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsCreatePathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsCreateQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsCreateRequests:
    group_create_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    group_create_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsCreateRequest:
    path_params: GroupsCreatePathParams = field()
    query_params: GroupsCreateQueryParams = field()
    request: GroupsCreateRequests = field()
    

@dataclass
class GroupsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    ad_group: Optional[dict[str, dict[str, Any]]] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
