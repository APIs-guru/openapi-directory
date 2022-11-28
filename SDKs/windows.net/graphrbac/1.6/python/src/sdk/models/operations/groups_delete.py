from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsDeletePathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsDeleteRequest:
    path_params: GroupsDeletePathParams = field()
    query_params: GroupsDeleteQueryParams = field()
    

@dataclass
class GroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
