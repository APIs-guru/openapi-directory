from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsAddOwnerPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsAddOwnerQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsAddOwnerRequests:
    add_owner_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_owner_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroupsAddOwnerRequest:
    path_params: GroupsAddOwnerPathParams = field()
    query_params: GroupsAddOwnerQueryParams = field()
    request: GroupsAddOwnerRequests = field()
    

@dataclass
class GroupsAddOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
