from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroupsGetPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsGetQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetRequest:
    path_params: GroupsGetPathParams = field()
    query_params: GroupsGetQueryParams = field()
    

@dataclass
class GroupsGetResponse:
    content_type: str = field()
    status_code: int = field()
    ad_group: Optional[dict[str, dict[str, Any]]] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
